const root = ''
const node1 = ''
const node2 = ''
const node3 = ''
const node4 = ''
const node5 = ''
const node6 = ''

let topoData = {
  nodes: [
    {
      id: '1',
      name: '根节点',
      image: root
    },
    {
      id: '2',
      name: '节点2',
      image: node1
    },
    {
      id: '3',
      name: '节点3',
      image: node2
    },
    {
      id: '4',
      name: '节点4',
      image: node1
    },
    {
      id: '5',
      name: '节点5',
      image: node1
    },
    {
      id: '41',
      name: '节点6',
      image: node3
    },
    {
      id: '42',
      name: '节点7',
      image: node4
    },
    {
      id: '411',
      name: '节点8',
      image: node1
    },
    {
      id: '412',
      name: '节点9',
      image: node1
    },
    {
      id: '4111',
      name: '节点10',
      image: node5
    },
    {
      id: '51',
      name: '节点11',
      image: node3
    },
    {
      id: '52',
      name: '节点12',
      image: node5
    },
    {
      id: '511',
      name: '节点14',
      image: node6
    },
    {
      id: '512',
      name: '节点15',
      image: node6
    }
  ],
  lines: [
    {
      name: '根节点到节点2',
      source: '1',
      target: '2',
      speed: 50,
      weight: 30
    },
    {
      name: '节点2到节点3',
      source: '2',
      target: '3',
      speed: 2,
      weight: 22
    },
    {
      name: '节点3到节点4',
      source: '3',
      target: '4',
      speed: 15,
      weight: 20
    },
    {
      name: '节点3到节点5',
      source: '3',
      target: '5',
      speed: 10,
      weight: 13
    },
    {
      name: '节点4到节点6',
      source: '4',
      target: '41',
      speed: 9,
      weight: 12
    },
    {
      name: '节点4到节点7',
      source: '4',
      target: '42',
      speed: 4,
      weight: 9
    },
    {
      name: '节点6到节点8',
      source: '41',
      target: '411',
      speed: 21,
      weight: 8
    },
    {
      name: '节点5到节点11',
      source: '5',
      target: '51',
      speed: 12,
      weight: 12
    },
    {
      name: '节点5到节点12',
      source: '5',
      target: '52',
      speed: 12,
      weight: 15
    },
    {
      name: '节点11到节点14',
      source: '51',
      target: '511',
      speed: 20,
      weight: 10
    },
    {
      name: '节点11到节点12',
      source: '51',
      target: '52',
      speed: 10,
      weight: 12
    },
    {
      name: '节点11到节点15',
      source: '51',
      target: '512',
      speed: 10,
      weight: 12
    },
    {
      name: '节点12到节点15',
      source: '52',
      target: '512',
      speed: 10,
      weight: 12
    }
  ]
}

export default topoData
