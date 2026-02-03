/**
 * 游戏管理路由配置示例
 * 将此配置添加到 /Users/wang/dev/web/admin-web/src/router/index.js 中
 */

export default {
  path: '/game',
  component: () => import('@/layout'),
  redirect: '/game/dashboard',
  meta: { title: '游戏管理', icon: 'trophy' },
  children: [
    {
      path: 'dashboard',
      name: 'GameDashboard',
      component: () => import('@/views/game/dashboard'),
      meta: { title: '数据看板', icon: 'chart', noCache: true }
    },
    {
      path: 'assist-options',
      name: 'AssistOptions',
      component: () => import('@/views/game/assistOptions'),
      meta: { title: '助战选项', icon: 'setting' }
    },
    {
      path: 'probability-config',
      name: 'ProbabilityConfig',
      component: () => import('@/views/game/probabilityConfig'),
      meta: { title: '概率配置', icon: 'odometer' }
    },
    {
      path: 'battle-rounds',
      name: 'BattleRounds',
      component: () => import('@/views/game/battleRounds'),
      meta: { title: '游戏回合', icon: 'list' }
    },
    {
      path: 'assist-records',
      name: 'AssistRecords',
      component: () => import('@/views/game/assistRecords'),
      meta: { title: '助战记录', icon: 'document' }
    },
    {
      path: 'prize-pool-logs',
      name: 'PrizePoolLogs',
      component: () => import('@/views/game/prizePoolLogs'),
      meta: { title: '奖池流水', icon: 'money' }
    },
    {
      path: 'win-records',
      name: 'WinRecords',
      component: () => import('@/views/game/winRecords'),
      meta: { title: '中奖记录', icon: 'star' }
    },
    {
      path: 'system-users',
      name: 'SystemUsers',
      component: () => import('@/views/game/systemUsers'),
      meta: { title: '系统号管理', icon: 'user' }
    }
  ]
}
