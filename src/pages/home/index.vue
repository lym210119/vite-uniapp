<script setup lang="ts">
</script>

<template>
  <view class="flex-col">
    <view class="section flex-col px-5 pt-17">
      <view class="flex flex-row justify-between">
        <view class="flex flex-col">
          <text class="text-bold text-lg text-black">
            Hi~张三123
          </text>
          <text class="text-xs text-gray">
            武汉锦辰数科技术有限公司123
          </text>
        </view>
        <view>
          <image
            class="h-22 w-26"
            src="/static/images/16862116349250052310.png"
            mode="scaleToFill"
          />
        </view>
      </view>

      <view class="h-[202px] flex flex-col rounded-[12px] bg-[#587FF8] text-white">
        <view class="flex justify-between p-[16px]">
          <view class="flex flex-row items-center">
            <text class="i-ep:trend-charts text-[16px]" />
            <text class="mx-1 text-[16px]">
              成交数据
            </text>
            <text class="i-material-symbols:arrow-forward-ios text-[16px]" />
          </view>
          <view class="flex flex-row text-xs">
            <view class="mr-3">
              <text>我的</text>
              <text class="i-material-symbols:keyboard-arrow-down" />
            </view>
            <view>
              <text>今天</text>
              <text class="i-material-symbols:keyboard-arrow-down" />
            </view>
          </view>
        </view>
        <view class="flex-1 border-[rgba(255,255,255,0.4)] rounded-[12px] border-solid">
          2111
        </view>
      </view>
    </view>
  </view>
</template>

<style scoped>
.section {
  background-image: url('/static/images/8371@2x.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>

<route type="home" lang="json">
{
  "style": {
    "navigationBarTitleText": "首页",
    "navigationBarTextStyle": "black"
  }
}
</route>
