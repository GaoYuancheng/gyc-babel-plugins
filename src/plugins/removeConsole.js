// https://astexplorer.net/

// 去除 代码中的 console
module.exports = function () {
  return {
    visitor: {
      // 编辑节点名称
      CallExpression(path) {
        console.log("CallExpression", path.node.callee.object.name);
        // 判断该节点为console
        if (path.node.callee.object.name === "console") {
          path.remove();
        }
      },
    },
  };
};
