export const macros = [
  {
    id: 'm1',
    title: '蒼天 Lv20 ｜職業 Lv21',
    minLevel: 20,
    maxLevel: 21,
    category: '1-30',
    tags: ['Lv20+'],
    req: '需求：CP ≥ 180｜控制力 ≥ 180',
    code: `/ac 儉約<wait.2>
/ac 加工<wait.3>
/ac 中級加工<wait.3>
/ac 加工<wait.3>
/ac 加工<wait.3>
/ac 加工<wait.3>
/ac 製作<wait.3>
/ac 製作<wait.3>
/ac 製作<wait.3>
/echo 巨集動作 已完成！<se.14>`
  },
  {
    id: 'm2',
    title: '蒼天 Lv20 ｜職業 Lv33',
    minLevel: 20,
    maxLevel: 33,
    category: '30-60',
    tags: ['Lv33+'],
    req: '需求：CP ≥ 220｜控制力 ≥ 230',
    code: `/ac 儉約<wait.2>
/ac 改革<wait.3>
/ac 加工<wait.3>
/ac 中級加工<wait.3>
/ac 中級加工<wait.3>
/ac 製作<wait.3>
/ac 製作<wait.3>
/echo 巨集動作 已完成！<se.14>`
  },
  {
    id: 'm25',
    title: '蒼天 Lv20 ｜職業 Lv33 (NQ素材)',
    minLevel: 33,
    maxLevel: 60,
    category: '30-60',
    tags: ['Lv33+', 'NQ'],
    req: '需求：CP ≥ 240｜控制力 ≥ 240',
    code: `/ac 儉約<wait.2>
/ac 改革<wait.3>
/ac 加工<wait.3>
/ac 中級加工<wait.3>
/ac 加工<wait.3>
/ac 中級加工<wait.3>
/ac 改革<wait.3>
/ac 加工<wait.3>
/ac 中級加工<wait.3>
/ac 製作<wait.3>
/ac 製作<wait.3>
/echo 巨集動作 已完成！<se.14>`
  },
  {
    id: 'm3',
    title: '蒼天 Lv40 ｜職業 Lv45',
    minLevel: 40,
    maxLevel: 45,
    category: '30-60',
    tags: ['Lv45+'],
    req: '需求：CP ≥ 260｜控制力 ≥ 270',
    code: `/ac 改革<wait.2>
/ac 加工<wait.3>
/ac 中級加工<wait.3>
/ac 加工<wait.3>
/ac 中級加工<wait.3>
/ac 精修<wait.3>
/ac 改革<wait.2>
/ac 加工<wait.3>
/ac 比爾格的祝福<wait.3>
/ac 崇敬<wait.2>
/ac 製作<wait.3>
/ac 製作<wait.3>
/echo 巨集動作 已完成！<se.14>`
  },
  {
    id: 'm4',
    title: '蒼天 Lv40 ｜職業 Lv50',
    minLevel: 40,
    maxLevel: 50,
    category: '30-60',
    tags: ['Lv50'],
    req: '需求：CP ≥ 280｜控制力 ≥ 290',
    code: `/ac 改革<wait.2>
/ac 加工<wait.3>
/ac 中級加工<wait.3>
/ac 加工<wait.3>
/ac 中級加工<wait.3>
/ac 精修<wait.3>
/ac 改革<wait.2>
/ac 加工<wait.3>
/ac 比爾格的祝福<wait.3>
/ac 崇敬<wait.2>
/ac 製作<wait.3>
/ac 製作<wait.3>
/echo 巨集動作 已完成！<se.14>`
  }
  ,
  {
    id: 'm5',
    title: '蒼天 Lv40 ｜職業 Lv63',
    minLevel: 40,
    maxLevel: 40,
    category: '30-60',
    tags: ['Lv40','63裝'],
    req: '',
    code: `/ac "改革" <wait.2>
/ac "加工" <wait.3>
/ac "中級加工" <wait.3>
/ac "加工" <wait.3>
/ac "中級加工" <wait.3>
/ac "精修" <wait.3>
/ac "改革" <wait.2>
/ac "比爾格的祝福" <wait.3>
/ac "製作" <wait.3>
/echo 巨集動作 已完成！<se.14>`
  },
  {
    id: 'm6',
    title: '蒼天 Lv60 ｜職業 Lv63 (60等工票飾品)',
    minLevel: 60,
    maxLevel: 60,
    category: '60-90',
    tags: ['Lv60','63裝','票飾品'],
    req: '',
    code: `/ac 堅信 <wait.3>
/ac "改革" <wait.2>
/ac "加工" <wait.3>
/ac "中級加工" <wait.3>
/ac "加工" <wait.3>
/ac "中級加工" <wait.3>
/ac "精修" <wait.3>
/ac "改革" <wait.2>
/ac "加工" <wait.3>
/ac "中級加工" <wait.3>
/ac 闊步 <wait.3>
/ac "比爾格的祝福" <wait.3>
/ac "崇敬" <wait.2>
/ac 模範製作 <wait.3>
/ac 模範製作 <wait.3>
/echo 巨集動作 已完成！<se.14>`
  }
];

