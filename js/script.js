var graphConfig = new GitGraph.Template({
  colors: [ "#9993FF", "#47E8D4", "#6BDB52", "#F85BB5", "#FFA657", "#F85BB5" ],
  branch: {
    color: "#000000",
    lineWidth: 3,
    spacingX: 60,
    mergeStyle: "straight",
    showLabel: true, // display branch names on graph
    labelFont: "normal 10pt Arial",
    labelRotation: 0
  },
  commit: {
    spacingY: -30,
    dot: {
      size: 8,
      strokeColor: "#000000",
      strokeWidth: 4
    },
    tag: {
      font: "normal 10pt Arial",
      color: "yellow"
    },
    message: {
      color: "black",
      font: "normal 12pt Arial",
      displayAuthor: false,
      displayBranch: false,
      displayHash: false,
    }
  },
  arrow: {
    size: 8,
    offset: 3
  }
});
var config = {
  template: graphConfig,
  mode: "extended",
  orientation: "horizontal"
};
var gitgraph = new GitGraph(config);

var master = gitgraph.branch({
    name:'master(production)',
});
gitgraph.commit({
    message: 'init',
    author:'admin'
}).commit({
    message: 'some configuration commit',
    author: 'admin'
});

var develop = gitgraph.branch({
    parentBranch: master,
    name:'develop(hypermedia)',
    column: 2
});

var test = gitgraph.branch({
    parentBranch: master,
    name:"test(stage)",
    column: 1
});
develop.commit({
    message: 'create develop branch',
    author: 'admin'
});
test.commit({
    message: 'create test branch',
    author: 'admin'
});

var ticket1 = gitgraph.branch({
    dotColor: 'blue',
    parentBranch: master,
    name:"ticket1",
    column:3
});

ticket1.commit({
    message: 'some feature commit 1',
    author: 'developer1'
}).commit({
    message: 'some feature commit 2',
    author: 'developer1'
}).commit({
    message: 'some feature commit 3',
    author: 'developer1'
});


var ticket2 = gitgraph.branch({
    dotColor: 'blue',
    parentBranch: master,
    name:"ticket2",
    column:4
});

ticket2.commit({
    message: 'some feature commit 1',
    author: 'developer2'
});
ticket2.commit({
    message: 'some feature commit 2',
    author: 'developer2'
});
ticket2.commit({
    message: 'some feature commit 3',
    author: 'developer2'
});
ticket2.commit({
    message: 'some feature commit 4',
    author: 'developer2'
});
