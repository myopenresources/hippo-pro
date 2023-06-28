import root from '../../assets/img/topo/root.svg'
import node1 from '../../assets/img/topo/node1.svg'
import node2 from '../../assets/img/topo/node2.svg'
import node3 from '../../assets/img/topo/node3.svg'
import node4 from '../../assets/img/topo/node4.svg'
import node5 from '../../assets/img/topo/node5.svg'
import node6 from '../../assets/img/topo/node6.svg'

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
      source: '1',
      target: '2',
      speed: 10,
      weight: 15
    },
    {
      source: '2',
      target: '3',
      speed: 9,
      weight: 6
    },
    {
      source: '3',
      target: '4',
      speed: 15,
      weight: 12
    },
    {
      source: '3',
      target: '5',
      speed: 10,
      weight: 13
    },
    {
      source: '4',
      target: '41',
      speed: 9,
      weight: 12
    },
    {
      source: '4',
      target: '42',
      speed: 9,
      weight: 9
    },
    {
      source: '41',
      target: '411',
      speed: 12,
      weight: 8
    },
    {
      source: '5',
      target: '51',
      speed: 12,
      weight: 12
    },
    {
      source: '5',
      target: '52',
      speed: 12,
      weight: 15
    },
    {
      source: '51',
      target: '511',
      speed: 10,
      weight: 10
    },
    {
      source: '51',
      target: '52',
      speed: 10,
      weight: 12
    },
    {
      source: '51',
      target: '512',
      speed: 10,
      weight: 12
    },
    {
      source: '52',
      target: '512',
      speed: 10,
      weight: 12
    },
    {
      source: '412',
      target: '4111',
      speed: 10,
      weight: 12
    },
    {
      source: '2',
      target: '412',
      speed: 10,
      weight: 12
    }
  ]
}

export default topoData
