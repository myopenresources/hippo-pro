<template>
  <MainContent :headerVisible="false" :mainContentStyle="{}" :bodyStyle="{}">
    <div class="preview-demo">
      <el-row :gutter="12">
        <el-col :span="24">
          <el-card class="card">
            <template #header>
              <div class="card-header">
                <span>云备份 CBR</span>
              </div>
            </template>
            <div class="card-body">
              <div class="label">
                云备份（Cloud Backup and
                Recovery，CBR）为云内和云下VMware虚拟化环境，提供简单易用的备份服务。当发生病毒入侵、人为误删除、软硬件故障等事件，云备份支持将数据恢复到任意备份点。
              </div>
              <img src="../../assets/img/preview/preview-header-right.svg" />
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="12">
        <el-col :xs="24" :sm="24" :md="24" :lg="16" :xl="18">
          <el-card class="card">
            <template #header>
              <div class="card-header">
                <span>您还没有创建云备份</span>
              </div>
            </template>
            <div class="card-body" style="height: 400px">
              使用云备份需要先购买存储库，存储库是用来存放备份的容器，购买存储库后绑定备份策略，即可实现周期性自动备份，如果出现自动备份失败，则在第2天会通过短信和邮件通知客户。
              <el-row :gutter="12">
                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                  <div class="inner-card">
                    <div class="inner-card-header">云服务器备份</div>
                    <div class="inner-card-body">
                      云服务器备份提供对弹性云服务器和裸金属服务器的基于多云硬盘一致性快照技术的数据保护。云备份支持备份整个服务器，为服务器提供数据保护。
                      <div class="inner-card-body-btn">
                        <el-button type="primary">立即开通</el-button>
                      </div>
                    </div>
                  </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                  <div class="inner-card">
                    <div class="inner-card-header">云硬盘备份</div>
                    <div class="inner-card-body">
                      云硬盘备份提供对云硬盘的基于快照技术的数据保护。云备份支持备份服务器的单个磁盘，为磁盘提供数据保护。
                      <div class="inner-card-body-btn">
                        <el-button type="primary">立即开通</el-button>
                      </div>
                    </div>
                  </div>
                </el-col>
              </el-row>
              <el-row :gutter="12">
                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                  <div class="inner-card">
                    <div class="inner-card-header">SFS Turbo备份</div>
                    <div class="inner-card-body">
                      云备份提供对SFS Turbo文件系统的备份保护。通过SFS
                      Turbo备份，您可以使用备份创建新的SFS Turbo，从而避免SFS Turbo重要数据丢失。
                      <div class="inner-card-body-btn">
                        <el-button type="primary">立即开通</el-button>
                      </div>
                    </div>
                  </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                  <div class="inner-card">
                    <div class="inner-card-header">VMware备份</div>
                    <div class="inner-card-body">
                      VMware备份为用户数据中心的VMware虚拟化环境，提供虚拟机整机粒度的备份功能。用户可以选择公有云作为异地灾备站点，将线下的VMware虚拟机备份上公有云。
                      <div class="inner-card-body-btn">
                        <el-button type="primary">立即开通</el-button>
                      </div>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="6">
          <el-card class="card">
            <template #header>
              <div class="card-header">
                <span>成长地图</span>
              </div>
            </template>
            <div class="card-body" style="height: 400px">
              <ul class="list">
                <li>产品介绍</li>
                <li>什么是云备份</li>
                <li>云备份使用场景</li>
                <li>云备份功能概览</li>
                <li>云备份使用限制</li>
                <li>基本概念</li>
                <li>存储库</li>
                <li>备份策略</li>
                <li>复制</li>
                <li>即时恢复</li>
                <li>人工智能一对一在线服务</li>
                <li>技术指导</li>
              </ul>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </MainContent>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.preview-demo {
  width: calc(100% - 12px);
  height: 100%;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  .card {
    position: relative;
    min-height: 200px;
    margin-bottom: 6px;
    margin-top: 6px;
    :deep(.el-card__header) {
      border: 0;
    }
    .card-header {
      font-size: 16px;
    }
    .card-body {
      color: var(--el-text-color-regular);
      overflow-y: auto;
      overflow-x: hidden;
      .label {
        margin-right: 450px;
      }
      img {
        position: absolute;
        top: 20px;
        right: 10px;
      }
      .inner-card {
        background-color: rgb(240, 248, 255);
        padding: 15px;
        margin-top: 15px;
        border-radius: 6px;
        &-header {
          font-size: 16px;
          height: 35px;
          color: var(--el-text-color-primary);
        }
        &-body {
          color: var(--el-text-color-regular);
          height: 100px;
          position: relative;
          &-btn {
            position: absolute;
            bottom: 0px;
            left: 0px;
          }
        }
      }
      .list {
        margin-left: 16px;
        li {
          margin-bottom: 12px;
        }
      }
    }
  }
}
</style>
