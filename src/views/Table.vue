<template>
  <div style="margin-bottom: 16px">刘慈欣《三体》国际奖项</div>
  <n-data-table
    :columns="columns"
    :data="data"
    :pagination="pagination"
    :bordered="false"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { DataTableColumns } from 'naive-ui'

type Prize = {
  time: string
  title: string
  works: string
}

const createColumns = ({
  view,
}: {
  view: (row: Prize) => void
}): DataTableColumns<Prize> => {
  return [
    {
      title: '获奖时间',
      key: 'time',
    },
    {
      title: '奖项名称',
      key: 'title',
    },
    {
      title: '获奖作品',
      key: 'works',
    },
  ]
}

const data: Prize[] = [
  {
    time: '2015年2月',
    title: '2014年度美国奇幻科幻协会星云奖长篇小说类（提名）',
    works: '《The Three-Body Problem》（《三体》）',
  },
  {
    time: '2015年4月',
    title: '2015年度普罗米修斯奖最佳小说（提名）',
    works: '《The Three-Body Problem》（《三体》）',
  },
  {
    time: '2015年5月',
    title: '轨迹奖科幻小说类（提名）',
    works: '《The Three-Body Problem》（《三体》）',
  },
  {
    time: '2015年5月',
    title: '约翰·W·坎贝尔纪念奖最佳科幻小说（提名）',
    works: '《The Three-Body Problem》（《三体》）',
  },
  {
    time: '2015年8月',
    title: '第73届雨果奖最佳长篇（获奖)',
    works: '《The Three-Body Problem》（《三体》）',
  },
  {
    time: '2017年',
    title: '轨迹奖最佳长篇科幻小说奖（获奖）',
    works: '《三体3：死神永生》',
  },
  {
    time: '2020年8月',
    title: '第51届日本星云奖海外长篇小说部门奖',
    works: '刘慈欣《三体》小说',
  },
]

export default defineComponent({
  setup() {
    return {
      data,
      columns: createColumns({
        view(row: Prize) {},
      }),
      pagination: false as const,
    }
  },
})
</script>
