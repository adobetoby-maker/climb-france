export type Lang = 'en' | 'fr' | 'de'

export interface GearItem {
  id: string
  emoji: string
  unsplashId: string
  names: Record<Lang, string>
  description: Record<Lang, string>
}

export interface Phrase {
  en: string
  fr: string
  de: string
  category: 'command' | 'medical' | 'travel' | 'instruction'
}

export const GEAR: GearItem[] = [
  {
    id: 'harness',
    emoji: '🔗',
    unsplashId: 'photo-1522163182402-834f871fd851',
    names: { en: 'Harness', fr: 'Harness', de: 'Harness' },
    description: {
      en: 'Worn around hips and legs — connects you to the rope.',
      fr: 'Worn around hips and legs — connects you to the rope.',
      de: 'Worn around hips and legs — connects you to the rope.',
    },
  },
  {
    id: 'carabiner',
    emoji: '🔒',
    unsplashId: 'photo-1590156562745-5d4a0a3e30b2',
    names: { en: 'Carabiner', fr: 'Carabiner', de: 'Carabiner' },
    description: {
      en: 'A metal loop with a spring gate for connecting equipment.',
      fr: 'A metal loop with a spring gate for connecting equipment.',
      de: 'A metal loop with a spring gate for connecting equipment.',
    },
  },
  {
    id: 'rope',
    emoji: '🪢',
    unsplashId: '/images/routes/france-limestone.jpg',
    names: { en: 'Rope', fr: 'Rope', de: 'Rope' },
    description: {
      en: 'Dynamic rope — absorbs the shock of a fall.',
      fr: 'Dynamic rope — absorbs the shock of a fall.',
      de: 'Dynamic rope — absorbs the shock of a fall.',
    },
  },
  {
    id: 'belay-device',
    emoji: '⚙️',
    unsplashId: 'photo-1534108733611-92c2af2a6aec',
    names: { en: 'Belay Device', fr: 'Belay Device', de: 'Belay Device' },
    description: {
      en: 'Controls rope friction for belaying and rappelling.',
      fr: 'Controls rope friction for belaying and rappelling.',
      de: 'Controls rope friction for belaying and rappelling.',
    },
  },
  {
    id: 'quickdraw',
    emoji: '🔗',
    unsplashId: 'photo-1545021073-48e19e0b0ffe',
    names: { en: 'Quickdraw', fr: 'Quickdraw', de: 'Quickdraw' },
    description: {
      en: 'Two carabiners connected by a sling — clips rope to bolts.',
      fr: 'Two carabiners connected by a sling — clips rope to bolts.',
      de: 'Two carabiners connected by a sling — clips rope to bolts.',
    },
  },
  {
    id: 'chalk-bag',
    emoji: '🎒',
    unsplashId: 'photo-1526911550914-df67a0b0e0f1',
    names: { en: 'Chalk Bag', fr: 'Chalk Bag', de: 'Chalk Bag' },
    description: {
      en: 'Holds chalk to dry sweaty hands for better grip.',
      fr: 'Holds chalk to dry sweaty hands for better grip.',
      de: 'Holds chalk to dry sweaty hands for better grip.',
    },
  },
  {
    id: 'climbing-shoes',
    emoji: '👟',
    unsplashId: 'photo-1551958219-acbc595b5a2d',
    names: { en: 'Climbing Shoes', fr: 'Climbing Shoes', de: 'Climbing Shoes' },
    description: {
      en: 'Tight-fitting shoes with sticky rubber soles for friction on rock.',
      fr: 'Tight-fitting shoes with sticky rubber soles for friction on rock.',
      de: 'Tight-fitting shoes with sticky rubber soles for friction on rock.',
    },
  },
  {
    id: 'helmet',
    emoji: '⛑️',
    unsplashId: 'photo-1503435980610-a51f3ddfee50',
    names: { en: 'Helmet', fr: 'Helmet', de: 'Helmet' },
    description: {
      en: 'Protects your head from rockfall and impact.',
      fr: 'Protects your head from rockfall and impact.',
      de: 'Protects your head from rockfall and impact.',
    },
  },
]

export const COMMANDS: Phrase[] = [
  { en: 'On belay?', fr: 'On belay?', de: 'On belay?', category: 'command' },
  { en: 'Belay on.', fr: 'Belay on.', de: 'Belay on.', category: 'command' },
  { en: 'Climbing?', fr: 'Climbing?', de: 'Climbing?', category: 'command' },
  { en: 'Climb on.', fr: 'Climb on.', de: 'Climb on.', category: 'command' },
  { en: 'Slack!', fr: 'Slack!', de: 'Slack!', category: 'command' },
  { en: 'Take!', fr: 'Take!', de: 'Take!', category: 'command' },
  { en: 'Watch me!', fr: 'Watch me!', de: 'Watch me!', category: 'command' },
  { en: 'Falling!', fr: 'Falling!', de: 'Falling!', category: 'command' },
  { en: 'Off belay.', fr: 'Off belay.', de: 'Off belay.', category: 'command' },
  { en: 'Safe.', fr: 'Safe.', de: 'Safe.', category: 'command' },
  { en: 'Rock!', fr: 'Rock!', de: 'Rock!', category: 'command' },
  { en: 'Lower me.', fr: 'Lower me.', de: 'Lower me.', category: 'command' },
]

export const KNOT_STEPS: Array<{ step: number } & Record<Lang, string>> = [
  { step: 1, en: 'Thread the rope through both loops of your harness.', fr: 'Thread the rope through both loops of your harness.', de: 'Thread the rope through both loops of your harness.' },
  { step: 2, en: 'Make a loop — leaving about 60 cm of rope free.', fr: 'Make a loop — leaving about 60 cm of rope free.', de: 'Make a loop — leaving about 60 cm of rope free.' },
  { step: 3, en: 'Pass the free end through the loop once.', fr: 'Pass the free end through the loop once.', de: 'Pass the free end through the loop once.' },
  { step: 4, en: 'Pass it through the loop a second time — forming a figure eight.', fr: 'Pass it through the loop a second time — forming a figure eight.', de: 'Pass it through the loop a second time — forming a figure eight.' },
  { step: 5, en: 'Retrace the eight through both harness loops exactly.', fr: 'Retrace the eight through both harness loops exactly.', de: 'Retrace the eight through both harness loops exactly.' },
  { step: 6, en: 'Dress the knot — all strands parallel, no twists.', fr: 'Dress the knot — all strands parallel, no twists.', de: 'Dress the knot — all strands parallel, no twists.' },
  { step: 7, en: 'Leave a tail of at least 10 cm below the knot.', fr: 'Leave a tail of at least 10 cm below the knot.', de: 'Leave a tail of at least 10 cm below the knot.' },
  { step: 8, en: 'Partner check: trace the knot — if it looks wrong, redo it.', fr: 'Partner check: trace the knot — if it looks wrong, redo it.', de: 'Partner check: trace the knot — if it looks wrong, redo it.' },
]

export const MOVEMENT_CUES: Array<{ cue: string } & Record<Lang, string>> = [
  { cue: 'right-hand', en: 'Move your right hand up to the hold.', fr: 'Move your right hand up to the hold.', de: 'Move your right hand up to the hold.' },
  { cue: 'left-foot', en: 'Step your left foot onto the foothold.', fr: 'Step your left foot onto the foothold.', de: 'Step your left foot onto the foothold.' },
  { cue: 'hips', en: 'Push your hips into the wall.', fr: 'Push your hips into the wall.', de: 'Push your hips into the wall.' },
  { cue: 'extend', en: 'Extend your arm fully — reach the next hold.', fr: 'Extend your arm fully — reach the next hold.', de: 'Extend your arm fully — reach the next hold.' },
  { cue: 'weight', en: 'Shift your weight onto your outside foot.', fr: 'Shift your weight onto your outside foot.', de: 'Shift your weight onto your outside foot.' },
  { cue: 'breathe', en: 'Breathe — relax your grip — trust your feet.', fr: 'Breathe — relax your grip — trust your feet.', de: 'Breathe — relax your grip — trust your feet.' },
  { cue: 'flag', en: 'Flag your right leg out for balance.', fr: 'Flag your right leg out for balance.', de: 'Flag your right leg out for balance.' },
  { cue: 'drop-knee', en: 'Drop your knee inside — it opens your hip.', fr: 'Drop your knee inside — it opens your hip.', de: 'Drop your knee inside — it opens your hip.' },
]

export const MEDICAL_PHRASES: Phrase[] = [
  { en: 'I need help.', fr: 'I need help.', de: 'I need help.', category: 'medical' },
  { en: 'Where does it hurt?', fr: 'Where does it hurt?', de: 'Where does it hurt?', category: 'medical' },
  { en: 'It hurts here.', fr: 'It hurts here.', de: 'It hurts here.', category: 'medical' },
  { en: 'I fell and hurt my ankle.', fr: 'I fell and hurt my ankle.', de: 'I fell and hurt my ankle.', category: 'medical' },
  { en: "I can't move my arm.", fr: "I can't move my arm.", de: "I can't move my arm.", category: 'medical' },
  { en: 'Call emergency services.', fr: 'Call emergency services.', de: 'Call emergency services.', category: 'medical' },
  { en: 'Is there a hospital nearby?', fr: 'Is there a hospital nearby?', de: 'Is there a hospital nearby?', category: 'medical' },
  { en: 'I am allergic to...', fr: 'I am allergic to...', de: 'I am allergic to...', category: 'medical' },
  { en: 'I have a broken bone.', fr: 'I have a broken bone.', de: 'I have a broken bone.', category: 'medical' },
  { en: 'The pain is sharp / dull / constant.', fr: 'The pain is sharp / dull / constant.', de: 'The pain is sharp / dull / constant.', category: 'medical' },
]

export const TRAVEL_PHRASES: Phrase[] = [
  { en: 'Where is the crag?', fr: 'Where is the crag?', de: 'Where is the crag?', category: 'travel' },
  { en: 'How long is the approach?', fr: 'How long is the approach?', de: 'How long is the approach?', category: 'travel' },
  { en: 'Is this route bolted?', fr: 'Is this route bolted?', de: 'Is this route bolted?', category: 'travel' },
  { en: 'Can I rent gear here?', fr: 'Can I rent gear here?', de: 'Can I rent gear here?', category: 'travel' },
  { en: 'Where can I buy chalk?', fr: 'Where can I buy chalk?', de: 'Where can I buy chalk?', category: 'travel' },
  { en: 'Is there a local guide available?', fr: 'Is there a local guide available?', de: 'Is there a local guide available?', category: 'travel' },
  { en: 'What is the grade of this route?', fr: 'What is the grade of this route?', de: 'What is the grade of this route?', category: 'travel' },
  { en: 'Are the bolts safe?', fr: 'Are the bolts safe?', de: 'Are the bolts safe?', category: 'travel' },
  { en: 'Is there shade in the afternoon?', fr: 'Is there shade in the afternoon?', de: 'Is there shade in the afternoon?', category: 'travel' },
  { en: 'We need to descend before dark.', fr: 'We need to descend before dark.', de: 'We need to descend before dark.', category: 'travel' },
]
