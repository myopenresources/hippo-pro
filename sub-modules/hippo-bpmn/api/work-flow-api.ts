import type {
  RequestPaginationResultData,
  RequestParams,
  RequestResultData
} from 'hippo-module-core'
import type { WorkFlowInfo } from '../types/work-flow-types'

export default class WorkFlowApi {
  static saveWorkFlowInfo(params: WorkFlowInfo) {
    return new Promise<RequestResultData<Object>>((resolve) => {
      resolve({
        status: 200,
        success: true,
        msg: '',
        data: {}
      })
    })
  }

  static getWorkFlowListByParams(params: RequestParams) {
    return new Promise<RequestPaginationResultData<WorkFlowInfo[]>>((resolve) => {
      resolve({
        status: 200,
        success: true,
        msg: '',
        data: {
          total: 100,
          list: [
            {
              id: 'dasfsdfasd232434',
              name: '流程1',
              moduleId: 'fsdafasf',
              moduleName: '系统模块',
              desc: '系统测试流程',
              workFlowContent: '',
              createUserId: 'fsdfasf',
              createUser: '管理员',
              createDate: '2023-07-20 14:17:58'
            }
          ]
        }
      })
    })
  }

  static deleteWorkFlowByIds(ids: string[]) {
    return new Promise<RequestResultData<Object>>((resolve) => {
      resolve({
        status: 200,
        success: true,
        msg: '',
        data: {}
      })
    })
  }

  static getWorkFlowById(id: string) {
    return new Promise<RequestResultData<WorkFlowInfo>>((resolve) => {
      resolve({
        status: 200,
        success: true,
        msg: '',
        data: {
          id: 'dasfsdfasd232434',
          name: '流程1',
          moduleId: 'fsdafasf',
          moduleName: '系统模块',
          desc: '系统测试流程',
          workFlowContent: `
              <bpmn:definitions id="Definitions_1ukrr15" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" targetNamespace="http://logic-flow.org" exporter="logicflow" exporterVersion="1.2.0">	
                  <bpmn:process isExecutable="true" id="Process_1qu1pni">	
                    <bpmn:startEvent id="Event_3e6funa" name="开始">	
                      <bpmn:outgoing>Flow_0fdh2rd</bpmn:outgoing>	
                    </bpmn:startEvent>	
                    <bpmn:userTask id="Activity_0i6utjr" name="上级审批">	
                      <bpmn:incoming>Flow_0fdh2rd</bpmn:incoming>	
                      <bpmn:outgoing>Flow_23siu1e</bpmn:outgoing>	
                    </bpmn:userTask>	
                    <bpmn:serviceTask id="Activity_3peon5l" name="归档">	
                      <bpmn:incoming>Flow_0msqbem</bpmn:incoming>	
                      <bpmn:outgoing>Flow_1qnc496</bpmn:outgoing>	
                    </bpmn:serviceTask>	
                    <bpmn:exclusiveGateway id="Gateway_2g02cpf">	
                      <bpmn:incoming>Flow_23siu1e</bpmn:incoming>	
                        <bpmn:outgoing>Flow_0msqbem</bpmn:outgoing>	
                        <bpmn:outgoing>Flow_3fna2m3</bpmn:outgoing>	
                    </bpmn:exclusiveGateway>	
                    <bpmn:endEvent id="Event_05oi96k" name="结束">	
                        <bpmn:incoming>Flow_1qnc496</bpmn:incoming>	
                        <bpmn:incoming>Flow_3fna2m3</bpmn:incoming>	
                    </bpmn:endEvent>	
                      <bpmn:sequenceFlow id="Flow_0fdh2rd" sourceRef="Event_3e6funa" targetRef="Activity_0i6utjr" />	
                      <bpmn:sequenceFlow id="Flow_23siu1e" sourceRef="Activity_0i6utjr" targetRef="Gateway_2g02cpf" />	
                      <bpmn:sequenceFlow id="Flow_0msqbem" sourceRef="Gateway_2g02cpf" targetRef="Activity_3peon5l" name="通过" />	
                      <bpmn:sequenceFlow id="Flow_1qnc496" sourceRef="Activity_3peon5l" targetRef="Event_05oi96k" />	
                      <bpmn:sequenceFlow id="Flow_3fna2m3" sourceRef="Gateway_2g02cpf" targetRef="Event_05oi96k" name="通过" />	
                  </bpmn:process>	
                  <bpmndi:BPMNDiagram id="BPMNDiagram_1">	
                    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1qu1pni">	
                        <bpmndi:BPMNEdge id="Flow_0fdh2rd_di" bpmnElement="Flow_0fdh2rd">	
                            <di:waypoint x="318" y="160" />	
                            <di:waypoint x="430" y="160" />	
                        </bpmndi:BPMNEdge>	
                        <bpmndi:BPMNEdge id="Flow_23siu1e_di" bpmnElement="Flow_23siu1e">	
                            <di:waypoint x="530" y="160" />	
                            <di:waypoint x="695" y="160" />	
                        </bpmndi:BPMNEdge>	
                        <bpmndi:BPMNEdge id="Flow_0msqbem_di" bpmnElement="Flow_0msqbem">	
                            <di:waypoint x="720" y="185" />	
                            <di:waypoint x="720" y="330" />	
                            <di:waypoint x="530" y="330" />	
                          <bpmndi:BPMNLabel>	
                            <dc:Bounds x="710" y="247.203125" width="20" height="14" />	
                          </bpmndi:BPMNLabel>	
                        </bpmndi:BPMNEdge>	
                        <bpmndi:BPMNEdge id="Flow_1qnc496_di" bpmnElement="Flow_1qnc496">	
                            <di:waypoint x="430" y="330" />	
                            <di:waypoint x="400" y="330" />	
                            <di:waypoint x="400" y="400" />	
                            <di:waypoint x="812" y="400" />	
                        </bpmndi:BPMNEdge>	
                        <bpmndi:BPMNEdge id="Flow_3fna2m3_di" bpmnElement="Flow_3fna2m3">	
                            <di:waypoint x="745" y="160" />	
                            <di:waypoint x="830" y="160" />	
                            <di:waypoint x="830" y="382" />	
                          <bpmndi:BPMNLabel>	
                            <dc:Bounds x="820" y="261.203125" width="20" height="14" />	
                          </bpmndi:BPMNLabel>	
                        </bpmndi:BPMNEdge>	
                        <bpmndi:BPMNShape id="Event_3e6funa_di" bpmnElement="Event_3e6funa">	
                          <dc:Bounds x="280" y="140" width="40" height="40" />	
                          <bpmndi:BPMNLabel>	
                            <dc:Bounds x="290" y="193" width="20" height="14" />	
                          </bpmndi:BPMNLabel>	
                        </bpmndi:BPMNShape>	
                        <bpmndi:BPMNShape id="Activity_0i6utjr_di" bpmnElement="Activity_0i6utjr">	
                          <dc:Bounds x="430" y="120" width="100" height="80" />	
                          <bpmndi:BPMNLabel>	
                            <dc:Bounds x="460" y="153" width="40" height="14" />	
                          </bpmndi:BPMNLabel>	
                        </bpmndi:BPMNShape>	
                        <bpmndi:BPMNShape id="Activity_3peon5l_di" bpmnElement="Activity_3peon5l">	
                          <dc:Bounds x="430" y="290" width="100" height="80" />	
                          <bpmndi:BPMNLabel>	
                            <dc:Bounds x="470" y="323" width="20" height="14" />	
                          </bpmndi:BPMNLabel>	
                        </bpmndi:BPMNShape>	
                        <bpmndi:BPMNShape id="Gateway_2g02cpf_di" bpmnElement="Gateway_2g02cpf">	
                          <dc:Bounds x="700" y="140" width="40" height="40" />	
                        </bpmndi:BPMNShape>	
                        <bpmndi:BPMNShape id="Event_05oi96k_di" bpmnElement="Event_05oi96k">	
                          <dc:Bounds x="810" y="380" width="40" height="40" />	
                          <bpmndi:BPMNLabel>	
                            <dc:Bounds x="820" y="433" width="20" height="14" />	
                          </bpmndi:BPMNLabel>	
                        </bpmndi:BPMNShape>	
                    </bpmndi:BPMNPlane>	
                  </bpmndi:BPMNDiagram>	
                </bpmn:definitions>
          `,
          createUserId: 'fsdfasf',
          createUser: '管理员',
          createDate: '2023-07-20 14:17:58'
        }
      })
    })
  }
}
