import { SPEAKERS } from './SpeakersData'
import { SPONSORS } from './SponsorsData'

export const SCHEDULE_DATA = [
  {
    type: 'fund',
    title: '👋🏻 Registration',
    startTime: '08:30',
  },
  {
    type: 'fund',
    title: '🎉 Opening',
    startTime: '09:20',
  },
  {
    type: 'session',
    title: 'Build Awesome Static Website with Gatsby.js',
    description:
      'เราจะพาทุกท่านรับชมการสร้างเว็บไซต์ Gucode ด้วยสิ่งที่เรียกว่า Gatsby.js ซึ่งเป็น static site generator for React แล้ว deploy ไปยัง GitHub Pages',
    speaker: SPEAKERS.GUCODE,
    aka: 'Gucode',
  },
  {
    type: 'session',
    title: "It's Next.js but it's static and it's fast",
    description:
      'How I optimized, configured, and accelerated my Next.js static-exported site with data splitting and prefetching.',
    speaker: SPEAKERS.AUN,
    duration: 25,
  },
  {
    type: 'session',
    title: 'My First Time with GraphQL on Production',
    description:
      'ประสบการณ์การใช้ GraphQL ขึ้น Production ครั้งแรก รวบรวมเทคนิค และ ปัญหาต่างๆที่เจอเพื่อเตรียมพร้อมใช้งานจริง',
    speaker: SPEAKERS.CAL,
    duration: 10,
  },
  {
    type: 'session',
    title: 'KotlinJS ❤️ React',
    description:
      'Kotlin เป็นภาษาที่ดี และทุกคนก็รัก React มาดูกันว่าเราจะผสมของสองสิ่งนี้ขึ้นมาได้อย่างไร',
    speaker: SPEAKERS.BABE,
    duration: 10,
  },
  {
    type: 'session',
    title: 'React, Redux’ s core idea with Clojurescript',
    description:
      'เราจะนำ React, Redux ไปเทียบกับสิ่งที่คล้ายกันบนภาษา Clojurescript ศึกษา, เรียนรู้, ลองใช้และนำแนวคิดต่าง ๆ กลับไปใช้บน js หรือคุณอาจไม่อยากกลับไปอีกเลย',
    speaker: SPEAKERS.VEHA,
    duration: 20,
  },
  {
    type: 'fund',
    title: '🍕 Lunch',
    sponsor: SPONSORS.ODDS,
    startTime: '11:30',
  },
  {
    type: 'session',
    title: 'State Management with MobX',
    description:
      'ใครว่า React มีแค่ Redux? มารู้จักกับ MobX ที่จะทำให้ state management ในแอพของคุณเป็นเรื่องง่ายยย',
    speaker: SPEAKERS.WIN,
    startTime: '13:00',
  },
  {
    type: 'session',
    title: 'Animating in React',
    description:
      'Join in the fun as I will demonstrate how animations can be applied to add style and substance to any page and how to develop simple animated micro interactions with ease using react',
    speaker: SPEAKERS.KEYA,
    duration: 30,
  },
  {
    type: 'session',
    title: 'Fast and Furious Development with React Design Patterns 🔥',
    description:
      'How you can use a set of Design Patterns to make your codebase easier to reason about and more concise to write, so you can express your ideas and ship to production in record time.',
    speaker: SPEAKERS.PHOOM,
    duration: 20,
  },
  {
    type: 'fund',
    title: '☕️ Break',
    duration: 15,
  },
  {
    type: 'session',
    title: 'Experience from building a mobile app in a month using Expo & GraphQL',
    description:
      'หากใครกำลังตัดสินใจที่จะใช้ Expo โปรดฟัง! จะมาเล่าเรื่องราวความสนุก (และความหัวร้อน) ของการทำ Mobile App ด้วย Expo รวมถึงเรื่องที่ต้องคิด เมื่อจะใช้ Expo',
    speaker: SPEAKERS.BENZ,
    duration: 15,
  },
  {
    type: 'session',
    title: 'React for a 5 million user app',
    speaker: SPEAKERS.TOON,
    description:
      'How we use React and other React tools/technologies with Wowbox in the present and in the future.',
    duration: 10,
  },
  {
    type: 'session',
    title: 'React Performance Tuning',
    description:
      'เมื่อ React app ที่เราทำ ไม่ได้รู้สึกเร็วอีกต่อไปแล้ว มารีวิวจุดผิดพลาด และข้อแก้ไขวิธีต่างๆ ที่ช่วยให้ app ของเรา smooth แบบ 60fps ถึงแม้ว่าจะเป็น mobile web ก็นึกว่าเล่น native app อยู่',
    speaker: SPEAKERS.HOLLY,
    duration: 25,
  },
  {
    type: 'fund',
    title: '☕️ Break',
    duration: 15,
  },
  {
    type: 'session',
    title: 'Testing React Applications',
    description:
      'Test สามารถช่วยให้เรา ship software ได้อย่างมั่นใจ แต่หาก test ด้วยแนวคิดที่ไม่ดี มันอาจนำไปสู่เส้นทางแห่งความยากลำบาก เราจะพาไปดูว่า ด้วยแนวคิดที่ดีและเครื่องมือที่ใช่ การเขียน test จะไม่ใช่เรื่องยากอีกต่อไป',
    speaker: SPEAKERS.HAM,
    duration: 20,
  },
  {
    type: 'session',
    title: 'State Management in React Apps',
    description:
      'Redux, MobX, Flux pattern หรือ pure React? เรามีเครื่องมือจัดการ state ใน app มากมายให้เลือก ใน talk นี้ เราจะมาเจาะลึกกันว่าทำไมบางคนชอบ Redux ทำไมบางคนชอบ MobX ทำไม Dan ถึงบอกว่าอย่ารีบใช้อะไรมากกว่า pure React​ ตกลงการใช้มันเป็นเรื่องความชอบส่วนบุคคล หรือเรื่องเลือกของให้เหมาะกับงานกันแน่นะ เราจะเจาะประเด็นนี้กัน',
    speaker: SPEAKERS.CHRIS,
    duration: 30,
  },
  {
    type: 'fund',
    title: '🎤 Panel Discussion:',
    topic: '"Transition to React in Large-scale Codebase"',
    duration: 30,
  },
  {
    type: 'fund',
    title: '👋🏻 Closing',
    startTime: '17:50',
  },
  {
    type: 'fund',
    title: '🍸 Dinner and Networking Party',
    sponsor: SPONSORS.TASKWORLD,
    startTime: '18:00',
  },
]
