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
      target: '2'
    },
    {
      source: '2',
      target: '3'
    },
    {
      source: '3',
      target: '4'
    },
    {
      source: '3',
      target: '5'
    },
    {
      source: '4',
      target: '41',
    },
    {
      source: '4',
      target: '42',
    },
    {
      source: '41',
      target: '411',
    },
    {
      source: '5',
      target: '51',
    },
    {
      source: '5',
      target: '52',
    },
    {
      source: '51',
      target: '511',
    },
    {
      source: '51',
      target: '52',
    },
    {
      source: '51',
      target: '512',
    },
    {
      source: '52',
      target: '512',
    },
    {
      source: '412',
      target: '4111',
    },
    {
      source: '2',
      target: '412'
    }
  ]
}

export default topoData
