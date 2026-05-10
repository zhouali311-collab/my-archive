export const works = [
  {
    id: 'poster-design',
    title: 'Poster Design',
    description: '海报设计作品集，收录各类活动视觉设计',
    tags: ['设计', '视觉', '海报'],
    coverColor: 'from-sage to-sage-dark',
    year: '2024',
    category: '设计',
    items: [
      {
        id: 'pd-1',
        title: '校园音乐节海报',
        subtitle: 'Campus Music Festival',
        description: '为学校音乐节设计的系列海报',
        image: null
      },
      {
        id: 'pd-2',
        title: '环保主题海报',
        subtitle: 'Environmental Poster',
        description: '关于可持续生活的视觉呼吁',
        image: null
      }
    ]
  },
  {
    id: 'public-account',
    title: 'Public Account Layout',
    description: '公众号排版与内容策划',
    tags: ['排版', '内容', '新媒体'],
    coverColor: 'from-soft-purple to-soft-purple/70',
    year: '2024',
    category: '内容',
    items: [
      {
        id: 'pa-1',
        title: '艺术类公众号运营',
        subtitle: 'Art Account Management',
        description: '长期运营的艺术方向公众号',
        image: null
      }
    ]
  },
  {
    id: 'mun',
    title: 'Model United Nations Media Work',
    description: '模拟联合国媒体工作，包括宣传物料和现场记录',
    tags: ['MUN', '媒体', '策划'],
    coverColor: 'from-soft-yellow to-soft-yellow/70',
    year: '2023',
    category: '策划',
    items: [
      {
        id: 'mun-1',
        title: '全国模拟联合国大会',
        subtitle: 'National MUN Conference',
        description: '媒体团队负责人',
        image: null
      }
    ]
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    description: '视频剪辑与后期制作',
    tags: ['视频', '剪辑', '后期'],
    coverColor: 'from-cream-dark to-warm-gray/50',
    year: '2024',
    category: '影像',
    items: [
      {
        id: 've-1',
        title: '纪录片短片',
        subtitle: 'Documentary Short',
        description: '关于城市青年生活的纪录片',
        image: null
      },
      {
        id: 've-2',
        title: '活动记录',
        subtitle: 'Event Documentation',
        description: '各类活动的视频记录与剪辑',
        image: null
      }
    ]
  },
  {
    id: 'writing',
    title: 'Writing Project',
    description: '写作项目，包括文章、随笔和文案',
    tags: ['写作', '文案', '文章'],
    coverColor: 'from-sage-light to-sage-light/70',
    year: '2023-2024',
    category: '写作',
    items: [
      {
        id: 'wp-1',
        title: '个人随笔集',
        subtitle: 'Personal Essays',
        description: '关于生活、城市和成长的文字',
        image: null
      }
    ]
  },
  {
    id: 'web-experiment',
    title: 'Personal Web Experiment',
    description: '个人网站实验，包括这个 my Archive',
    tags: ['网页', '实验', '个人'],
    coverColor: 'from-soft-purple/50 to-sage/50',
    year: '2024',
    category: '实验',
    items: [
      {
        id: 'we-1',
        title: 'my Archive',
        subtitle: 'This Website',
        description: '一个关于图像、身体、城市与青年表达的未完成档案',
        image: null
      }
    ]
  }
]

export const getWorksByCategory = (category) => {
  if (category === 'all') return works
  return works.filter(w => w.category === category)
}

export const workCategories = [
  { id: 'all', name: '全部', count: works.length },
  { id: '设计', name: '设计', count: works.filter(w => w.category === '设计').length },
  { id: '内容', name: '内容', count: works.filter(w => w.category === '内容').length },
  { id: '策划', name: '策划', count: works.filter(w => w.category === '策划').length },
  { id: '影像', name: '影像', count: works.filter(w => w.category === '影像').length },
  { id: '写作', name: '写作', count: works.filter(w => w.category === '写作').length },
  { id: '实验', name: '实验', count: works.filter(w => w.category === '实验').length }
]
