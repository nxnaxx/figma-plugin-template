import type { UIMessage } from '@common/protocol';

figma.showUI(__html__, {
  width: 350,
  height: 350,
});

figma.ui.onmessage = (msg: UIMessage) => {
  const { type } = msg;

  if (type === 'createRectangles') {
    const nodes: SceneNode[] = [];
    const count = msg.count;

    for (let i = 0; i < count; i++) {
      const rect = figma.createRectangle();
      rect.x = i * 150;
      rect.fills = [{ type: 'SOLID', color: { r: 0.7, g: 0.9, b: 0.3 } }];
      figma.currentPage.appendChild(rect);
      nodes.push(rect);
    }

    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
  }

  figma.closePlugin();
};
