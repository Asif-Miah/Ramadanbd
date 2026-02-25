// ═══ LOCATION DATA ═══
const CITIES = [
  { key:'dhaka',      en:'Dhaka',       bn:'ঢাকা',       icon:'🏙️' },
  { key:'mymensingh', en:'Mymensingh',  bn:'ময়মনসিংহ',   icon:'🌿' },
  { key:'chattogram', en:'Chattogram',  bn:'চট্টগ্রাম',   icon:'⛵' },
  { key:'sylhet',     en:'Sylhet',      bn:'সিলেট',       icon:'🍃' },
  { key:'khulna',     en:'Khulna',      bn:'খুলনা',       icon:'🌊' },
  { key:'rajshahi',   en:'Rajshahi',    bn:'রাজশাহী',     icon:'🍇' },
  { key:'barishal',   en:'Barishal',    bn:'বরিশাল',      icon:'🌾' },
  { key:'rangpur',    en:'Rangpur',     bn:'রংপুর',       icon:'🌻' },
];

const LOCATION_DATA = {
  dhaka: [
    ['05:13 AM','12:13 PM','03:30 PM','05:56 PM','07:08 PM'],
    ['05:12 AM','12:13 PM','03:30 PM','05:57 PM','07:09 PM'],
    ['05:12 AM','12:12 PM','03:31 PM','05:58 PM','07:09 PM'],
    ['05:11 AM','12:12 PM','03:31 PM','05:58 PM','07:10 PM'],
    ['05:10 AM','12:12 PM','03:31 PM','05:59 PM','07:10 PM'],
    ['05:09 AM','12:12 PM','03:31 PM','05:59 PM','07:10 PM'],
    ['05:09 AM','12:12 PM','03:31 PM','06:00 PM','07:11 PM'],
    ['05:08 AM','12:12 PM','03:32 PM','06:00 PM','07:11 PM'],
    ['05:07 AM','12:12 PM','03:32 PM','06:01 PM','07:12 PM'],
    ['05:06 AM','12:11 PM','03:32 PM','06:01 PM','07:12 PM'],
    ['05:05 AM','12:11 PM','03:32 PM','06:02 PM','07:13 PM'],
    ['05:05 AM','12:11 PM','03:32 PM','06:02 PM','07:13 PM'],
    ['05:04 AM','12:11 PM','03:32 PM','06:03 PM','07:14 PM'],
    ['05:04 AM','12:11 PM','03:32 PM','06:03 PM','07:14 PM'],
    ['05:03 AM','12:11 PM','03:32 PM','06:03 PM','07:14 PM'],
    ['05:01 AM','12:10 PM','03:33 PM','06:04 PM','07:15 PM'],
    ['05:00 AM','12:10 PM','03:33 PM','06:04 PM','07:15 PM'],
    ['04:59 AM','12:10 PM','03:33 PM','06:05 PM','07:16 PM'],
    ['04:58 AM','12:09 PM','03:33 PM','06:05 PM','07:16 PM'],
    ['04:57 AM','12:09 PM','03:33 PM','06:06 PM','07:17 PM'],
    ['04:56 AM','12:09 PM','03:33 PM','06:06 PM','07:17 PM'],
    ['04:55 AM','12:09 PM','03:33 PM','06:07 PM','07:18 PM'],
    ['04:54 AM','12:08 PM','03:33 PM','06:07 PM','07:18 PM'],
    ['04:53 AM','12:08 PM','03:33 PM','06:07 PM','07:18 PM'],
    ['04:52 AM','12:08 PM','03:33 PM','06:08 PM','07:19 PM'],
    ['04:51 AM','12:08 PM','03:33 PM','06:08 PM','07:19 PM'],
    ['04:50 AM','12:07 PM','03:32 PM','06:09 PM','07:20 PM'],
    ['04:49 AM','12:07 PM','03:32 PM','06:09 PM','07:20 PM'],
    ['04:48 AM','12:07 PM','03:32 PM','06:09 PM','07:21 PM'],
    ['04:47 AM','12:06 PM','03:32 PM','06:10 PM','07:21 PM'],
  ],
  mymensingh: [
    ['05:13 AM','12:13 PM','03:29 PM','05:56 PM','07:08 PM'],
    ['05:13 AM','12:13 PM','03:30 PM','05:56 PM','07:08 PM'],
    ['05:12 AM','12:12 PM','03:30 PM','05:57 PM','07:09 PM'],
    ['05:11 AM','12:12 PM','03:30 PM','05:57 PM','07:09 PM'],
    ['05:10 AM','12:12 PM','03:31 PM','05:58 PM','07:10 PM'],
    ['05:10 AM','12:12 PM','03:31 PM','05:58 PM','07:10 PM'],
    ['05:09 AM','12:12 PM','03:31 PM','05:59 PM','07:11 PM'],
    ['05:08 AM','12:12 PM','03:31 PM','05:59 PM','07:11 PM'],
    ['05:07 AM','12:12 PM','03:31 PM','06:00 PM','07:12 PM'],
    ['05:06 AM','12:11 PM','03:32 PM','06:00 PM','07:12 PM'],
    ['05:05 AM','12:11 PM','03:32 PM','06:01 PM','07:13 PM'],
    ['05:04 AM','12:11 PM','03:32 PM','06:02 PM','07:13 PM'],
    ['05:04 AM','12:11 PM','03:32 PM','06:02 PM','07:14 PM'],
    ['05:04 AM','12:11 PM','03:32 PM','06:02 PM','07:14 PM'],
    ['05:03 AM','12:11 PM','03:32 PM','06:03 PM','07:14 PM'],
    ['05:01 AM','12:10 PM','03:32 PM','06:04 PM','07:15 PM'],
    ['05:00 AM','12:10 PM','03:33 PM','06:04 PM','07:16 PM'],
    ['04:59 AM','12:10 PM','03:33 PM','06:04 PM','07:16 PM'],
    ['04:58 AM','12:09 PM','03:33 PM','06:05 PM','07:16 PM'],
    ['04:57 AM','12:09 PM','03:33 PM','06:05 PM','07:17 PM'],
    ['04:56 AM','12:09 PM','03:33 PM','06:06 PM','07:17 PM'],
    ['04:55 AM','12:09 PM','03:33 PM','06:06 PM','07:18 PM'],
    ['04:54 AM','12:08 PM','03:33 PM','06:07 PM','07:18 PM'],
    ['04:53 AM','12:08 PM','03:33 PM','06:07 PM','07:19 PM'],
    ['04:52 AM','12:08 PM','03:33 PM','06:08 PM','07:19 PM'],
    ['04:51 AM','12:08 PM','03:33 PM','06:08 PM','07:20 PM'],
    ['04:50 AM','12:07 PM','03:33 PM','06:09 PM','07:20 PM'],
    ['04:49 AM','12:07 PM','03:33 PM','06:09 PM','07:21 PM'],
    ['04:48 AM','12:07 PM','03:33 PM','06:09 PM','07:21 PM'],
    ['04:47 AM','12:06 PM','03:33 PM','06:10 PM','07:22 PM'],
  ],
  chattogram: [
    ['05:07 AM','12:07 PM','03:25 PM','05:52 PM','07:07 PM'],
    ['05:06 AM','12:07 PM','03:25 PM','05:52 PM','07:07 PM'],
    ['05:05 AM','12:07 PM','03:25 PM','05:53 PM','07:07 PM'],
    ['05:05 AM','12:07 PM','03:25 PM','05:53 PM','07:08 PM'],
    ['05:04 AM','12:07 PM','03:26 PM','05:54 PM','07:08 PM'],
    ['05:03 AM','12:07 PM','03:26 PM','05:54 PM','07:09 PM'],
    ['05:03 AM','12:07 PM','03:26 PM','05:54 PM','07:09 PM'],
    ['05:02 AM','12:07 PM','03:26 PM','05:55 PM','07:10 PM'],
    ['05:01 AM','12:06 PM','03:26 PM','05:55 PM','07:10 PM'],
    ['05:00 AM','12:06 PM','03:26 PM','05:56 PM','07:10 PM'],
    ['05:00 AM','12:06 PM','03:26 PM','05:56 PM','07:11 PM'],
    ['04:59 AM','12:06 PM','03:27 PM','05:57 PM','07:11 PM'],
    ['04:58 AM','12:06 PM','03:27 PM','05:57 PM','07:12 PM'],
    ['04:57 AM','12:05 PM','03:27 PM','05:58 PM','07:12 PM'],
    ['04:56 AM','12:05 PM','03:27 PM','05:58 PM','07:12 PM'],
    ['04:56 AM','12:05 PM','03:27 PM','05:58 PM','07:13 PM'],
    ['04:55 AM','12:05 PM','03:27 PM','05:59 PM','07:13 PM'],
    ['04:54 AM','12:04 PM','03:27 PM','05:59 PM','07:14 PM'],
    ['04:53 AM','12:04 PM','03:27 PM','06:00 PM','07:14 PM'],
    ['04:52 AM','12:04 PM','03:27 PM','06:00 PM','07:14 PM'],
    ['04:51 AM','12:04 PM','03:27 PM','06:00 PM','07:15 PM'],
    ['04:50 AM','12:03 PM','03:27 PM','06:01 PM','07:15 PM'],
    ['04:49 AM','12:03 PM','03:27 PM','06:01 PM','07:15 PM'],
    ['04:48 AM','12:03 PM','03:26 PM','06:01 PM','07:16 PM'],
    ['04:47 AM','12:03 PM','03:26 PM','06:02 PM','07:16 PM'],
    ['04:47 AM','12:02 PM','03:26 PM','06:02 PM','07:17 PM'],
    ['04:46 AM','12:02 PM','03:26 PM','06:03 PM','07:17 PM'],
    ['04:45 AM','12:02 PM','03:26 PM','06:03 PM','07:17 PM'],
    ['04:44 AM','12:01 PM','03:26 PM','06:03 PM','07:18 PM'],
    ['04:43 AM','12:01 PM','03:26 PM','06:04 PM','07:18 PM'],
  ],
  sylhet: [
    ['05:07 AM','12:07 PM','03:23 PM','05:50 PM','07:02 PM'],
    ['05:07 AM','12:07 PM','03:24 PM','05:50 PM','07:02 PM'],
    ['05:06 AM','12:07 PM','03:24 PM','05:51 PM','07:03 PM'],
    ['05:05 AM','12:06 PM','03:24 PM','05:51 PM','07:03 PM'],
    ['05:04 AM','12:06 PM','03:25 PM','05:52 PM','07:04 PM'],
    ['05:04 AM','12:06 PM','03:25 PM','05:52 PM','07:04 PM'],
    ['05:03 AM','12:06 PM','03:25 PM','05:53 PM','07:05 PM'],
    ['05:02 AM','12:06 PM','03:25 PM','05:53 PM','07:05 PM'],
    ['05:01 AM','12:06 PM','03:26 PM','05:54 PM','07:06 PM'],
    ['05:00 AM','12:06 PM','03:26 PM','05:55 PM','07:06 PM'],
    ['05:00 AM','12:05 PM','03:26 PM','05:55 PM','07:07 PM'],
    ['04:59 AM','12:05 PM','03:26 PM','05:56 PM','07:07 PM'],
    ['04:58 AM','12:05 PM','03:26 PM','05:56 PM','07:08 PM'],
    ['04:58 AM','12:05 PM','03:26 PM','05:56 PM','07:08 PM'],
    ['04:57 AM','12:05 PM','03:26 PM','05:57 PM','07:08 PM'],
    ['04:55 AM','12:04 PM','03:27 PM','05:58 PM','07:09 PM'],
    ['04:54 AM','12:04 PM','03:27 PM','05:58 PM','07:10 PM'],
    ['04:53 AM','12:04 PM','03:27 PM','05:59 PM','07:10 PM'],
    ['04:52 AM','12:04 PM','03:27 PM','05:59 PM','07:11 PM'],
    ['04:51 AM','12:03 PM','03:27 PM','06:00 PM','07:11 PM'],
    ['04:50 AM','12:03 PM','03:27 PM','06:00 PM','07:12 PM'],
    ['04:49 AM','12:03 PM','03:27 PM','06:00 PM','07:12 PM'],
    ['04:48 AM','12:03 PM','03:27 PM','06:01 PM','07:13 PM'],
    ['04:47 AM','12:02 PM','03:27 PM','06:01 PM','07:13 PM'],
    ['04:46 AM','12:02 PM','03:27 PM','06:02 PM','07:13 PM'],
    ['04:45 AM','12:02 PM','03:27 PM','06:02 PM','07:14 PM'],
    ['04:44 AM','12:01 PM','03:27 PM','06:03 PM','07:14 PM'],
    ['04:43 AM','12:01 PM','03:27 PM','06:03 PM','07:15 PM'],
    ['04:42 AM','12:01 PM','03:27 PM','06:04 PM','07:15 PM'],
    ['04:41 AM','12:01 PM','03:27 PM','06:04 PM','07:16 PM'],
  ],
  khulna: [
    ['05:17 AM','12:17 PM','03:35 PM','06:02 PM','07:13 PM'],
    ['05:17 AM','12:17 PM','03:35 PM','06:02 PM','07:13 PM'],
    ['05:16 AM','12:17 PM','03:36 PM','06:03 PM','07:14 PM'],
    ['05:15 AM','12:17 PM','03:36 PM','06:03 PM','07:14 PM'],
    ['05:15 AM','12:17 PM','03:36 PM','06:04 PM','07:15 PM'],
    ['05:14 AM','12:17 PM','03:36 PM','06:04 PM','07:15 PM'],
    ['05:13 AM','12:17 PM','03:36 PM','06:05 PM','07:16 PM'],
    ['05:12 AM','12:16 PM','03:37 PM','06:05 PM','07:16 PM'],
    ['05:12 AM','12:16 PM','03:37 PM','06:06 PM','07:17 PM'],
    ['05:11 AM','12:16 PM','03:37 PM','06:06 PM','07:17 PM'],
    ['05:10 AM','12:16 PM','03:37 PM','06:07 PM','07:17 PM'],
    ['05:09 AM','12:16 PM','03:37 PM','06:07 PM','07:18 PM'],
    ['05:08 AM','12:15 PM','03:37 PM','06:08 PM','07:18 PM'],
    ['05:08 AM','12:15 PM','03:37 PM','06:08 PM','07:18 PM'],
    ['05:07 AM','12:15 PM','03:37 PM','06:08 PM','07:19 PM'],
    ['05:06 AM','12:15 PM','03:37 PM','06:09 PM','07:19 PM'],
    ['05:05 AM','12:15 PM','03:37 PM','06:09 PM','07:20 PM'],
    ['05:04 AM','12:14 PM','03:37 PM','06:10 PM','07:20 PM'],
    ['05:03 AM','12:14 PM','03:37 PM','06:10 PM','07:21 PM'],
    ['05:02 AM','12:14 PM','03:37 PM','06:11 PM','07:21 PM'],
    ['05:01 AM','12:14 PM','03:37 PM','06:11 PM','07:21 PM'],
    ['05:00 AM','12:13 PM','03:37 PM','06:11 PM','07:22 PM'],
    ['04:59 AM','12:13 PM','03:37 PM','06:12 PM','07:22 PM'],
    ['04:58 AM','12:13 PM','03:37 PM','06:12 PM','07:23 PM'],
    ['04:57 AM','12:12 PM','03:37 PM','06:13 PM','07:23 PM'],
    ['04:56 AM','12:12 PM','03:37 PM','06:13 PM','07:24 PM'],
    ['04:55 AM','12:12 PM','03:37 PM','06:13 PM','07:24 PM'],
    ['04:55 AM','12:12 PM','03:37 PM','06:14 PM','07:24 PM'],
    ['04:54 AM','12:11 PM','03:37 PM','06:14 PM','07:25 PM'],
    ['04:53 AM','12:11 PM','03:37 PM','06:14 PM','07:25 PM'],
  ],
  rajshahi: [
    ['05:19 AM','12:18 PM','03:35 PM','06:01 PM','07:13 PM'],
    ['05:18 AM','12:18 PM','03:35 PM','06:02 PM','07:14 PM'],
    ['05:17 AM','12:18 PM','03:35 PM','06:02 PM','07:14 PM'],
    ['05:17 AM','12:18 PM','03:36 PM','06:03 PM','07:15 PM'],
    ['05:16 AM','12:18 PM','03:36 PM','06:03 PM','07:15 PM'],
    ['05:15 AM','12:18 PM','03:36 PM','06:04 PM','07:16 PM'],
    ['05:14 AM','12:18 PM','03:37 PM','06:04 PM','07:16 PM'],
    ['05:14 AM','12:17 PM','03:37 PM','06:05 PM','07:17 PM'],
    ['05:13 AM','12:17 PM','03:37 PM','06:05 PM','07:17 PM'],
    ['05:12 AM','12:17 PM','03:37 PM','06:06 PM','07:18 PM'],
    ['05:11 AM','12:17 PM','03:37 PM','06:06 PM','07:18 PM'],
    ['05:10 AM','12:17 PM','03:38 PM','06:07 PM','07:19 PM'],
    ['05:09 AM','12:16 PM','03:38 PM','06:08 PM','07:19 PM'],
    ['05:09 AM','12:16 PM','03:38 PM','06:08 PM','07:19 PM'],
    ['05:08 AM','12:16 PM','03:38 PM','06:08 PM','07:20 PM'],
    ['05:06 AM','12:16 PM','03:38 PM','06:09 PM','07:21 PM'],
    ['05:05 AM','12:16 PM','03:38 PM','06:10 PM','07:21 PM'],
    ['05:05 AM','12:15 PM','03:38 PM','06:10 PM','07:22 PM'],
    ['05:04 AM','12:15 PM','03:38 PM','06:10 PM','07:22 PM'],
    ['05:03 AM','12:15 PM','03:38 PM','06:11 PM','07:23 PM'],
    ['05:02 AM','12:15 PM','03:38 PM','06:11 PM','07:23 PM'],
    ['05:01 AM','12:14 PM','03:38 PM','06:12 PM','07:24 PM'],
    ['05:00 AM','12:14 PM','03:38 PM','06:12 PM','07:24 PM'],
    ['04:59 AM','12:14 PM','03:38 PM','06:13 PM','07:25 PM'],
    ['04:57 AM','12:13 PM','03:38 PM','06:13 PM','07:25 PM'],
    ['04:56 AM','12:13 PM','03:38 PM','06:14 PM','07:25 PM'],
    ['04:55 AM','12:13 PM','03:38 PM','06:14 PM','07:26 PM'],
    ['04:54 AM','12:13 PM','03:38 PM','06:15 PM','07:26 PM'],
    ['04:53 AM','12:12 PM','03:38 PM','06:15 PM','07:27 PM'],
    ['04:52 AM','12:12 PM','03:38 PM','06:16 PM','07:27 PM'],
  ],
  barishal: [
    ['05:03 AM','12:17 PM','03:30 PM','06:00 PM','07:12 PM'],
    ['05:02 AM','12:17 PM','03:31 PM','06:01 PM','07:13 PM'],
    ['05:01 AM','12:17 PM','03:31 PM','06:01 PM','07:13 PM'],
    ['05:01 AM','12:17 PM','03:31 PM','06:02 PM','07:14 PM'],
    ['05:00 AM','12:17 PM','03:31 PM','06:02 PM','07:14 PM'],
    ['04:59 AM','12:17 PM','03:32 PM','06:03 PM','07:15 PM'],
    ['04:59 AM','12:17 PM','03:32 PM','06:03 PM','07:15 PM'],
    ['04:58 AM','12:16 PM','03:32 PM','06:04 PM','07:15 PM'],
    ['04:57 AM','12:16 PM','03:32 PM','06:04 PM','07:16 PM'],
    ['04:56 AM','12:16 PM','03:32 PM','06:04 PM','07:16 PM'],
    ['04:56 AM','12:16 PM','03:32 PM','06:05 PM','07:17 PM'],
    ['04:55 AM','12:16 PM','03:32 PM','06:05 PM','07:17 PM'],
    ['04:54 AM','12:15 PM','03:32 PM','06:06 PM','07:17 PM'],
    ['04:53 AM','12:15 PM','03:32 PM','06:06 PM','07:18 PM'],
    ['04:52 AM','12:15 PM','03:33 PM','06:07 PM','07:18 PM'],
    ['04:51 AM','12:15 PM','03:33 PM','06:07 PM','07:19 PM'],
    ['04:51 AM','12:15 PM','03:33 PM','06:07 PM','07:19 PM'],
    ['04:50 AM','12:14 PM','03:33 PM','06:08 PM','07:19 PM'],
    ['04:49 AM','12:14 PM','03:33 PM','06:08 PM','07:20 PM'],
    ['04:48 AM','12:14 PM','03:33 PM','06:09 PM','07:20 PM'],
    ['04:47 AM','12:14 PM','03:33 PM','06:09 PM','07:21 PM'],
    ['04:46 AM','12:13 PM','03:33 PM','06:10 PM','07:21 PM'],
    ['04:45 AM','12:13 PM','03:32 PM','06:10 PM','07:21 PM'],
    ['04:44 AM','12:13 PM','03:32 PM','06:10 PM','07:22 PM'],
    ['04:43 AM','12:13 PM','03:32 PM','06:11 PM','07:22 PM'],
    ['04:42 AM','12:12 PM','03:32 PM','06:11 PM','07:23 PM'],
    ['04:41 AM','12:12 PM','03:32 PM','06:11 PM','07:23 PM'],
    ['04:40 AM','12:12 PM','03:32 PM','06:12 PM','07:23 PM'],
    ['04:39 AM','12:11 PM','03:32 PM','06:12 PM','07:24 PM'],
    ['04:38 AM','12:11 PM','03:31 PM','06:13 PM','07:24 PM'],
  ],
  rangpur: [
    ['05:18 AM','12:17 PM','04:21 PM','05:59 PM','07:16 PM'],
    ['05:17 AM','12:17 PM','04:22 PM','05:59 PM','07:16 PM'],
    ['05:17 AM','12:17 PM','04:23 PM','06:00 PM','07:17 PM'],
    ['05:16 AM','12:16 PM','04:23 PM','06:01 PM','07:17 PM'],
    ['05:15 AM','12:16 PM','04:23 PM','06:01 PM','07:18 PM'],
    ['05:14 AM','12:16 PM','04:24 PM','06:02 PM','07:18 PM'],
    ['05:14 AM','12:16 PM','04:24 PM','06:02 PM','07:19 PM'],
    ['05:13 AM','12:16 PM','04:25 PM','06:03 PM','07:19 PM'],
    ['05:12 AM','12:16 PM','04:25 PM','06:03 PM','07:20 PM'],
    ['05:11 AM','12:16 PM','04:26 PM','06:04 PM','07:20 PM'],
    ['05:10 AM','12:15 PM','04:26 PM','06:05 PM','07:21 PM'],
    ['05:09 AM','12:15 PM','04:27 PM','06:05 PM','07:22 PM'],
    ['05:08 AM','12:15 PM','04:27 PM','06:06 PM','07:22 PM'],
    ['05:07 AM','12:15 PM','04:27 PM','06:06 PM','07:23 PM'],
    ['05:06 AM','12:15 PM','04:28 PM','06:07 PM','07:23 PM'],
    ['05:05 AM','12:14 PM','04:28 PM','06:07 PM','07:24 PM'],
    ['05:04 AM','12:14 PM','04:29 PM','06:08 PM','07:24 PM'],
    ['05:03 AM','12:14 PM','04:29 PM','06:08 PM','07:25 PM'],
    ['05:03 AM','12:14 PM','04:29 PM','06:09 PM','07:25 PM'],
    ['05:01 AM','12:13 PM','04:30 PM','06:09 PM','07:26 PM'],
    ['05:00 AM','12:13 PM','04:30 PM','06:10 PM','07:26 PM'],
    ['04:59 AM','12:13 PM','04:30 PM','06:10 PM','07:27 PM'],
    ['04:58 AM','12:13 PM','04:30 PM','06:11 PM','07:27 PM'],
    ['04:57 AM','12:12 PM','04:31 PM','06:11 PM','07:28 PM'],
    ['04:56 AM','12:12 PM','04:31 PM','06:12 PM','07:28 PM'],
    ['04:55 AM','12:12 PM','04:31 PM','06:12 PM','07:29 PM'],
    ['04:54 AM','12:11 PM','04:32 PM','06:13 PM','07:29 PM'],
    ['04:53 AM','12:11 PM','04:32 PM','06:13 PM','07:30 PM'],
    ['04:52 AM','12:11 PM','04:32 PM','06:14 PM','07:30 PM'],
    ['04:51 AM','12:10 PM','04:32 PM','06:14 PM','07:31 PM'],
  ],
};

// ═══ STATE ═══
const RAM_START = new Date('2026-02-19');
const RAM_END   = new Date('2026-03-20');
const RAM_DAYS  = 30;
let currentCity = 'dhaka';
let tempCity    = 'dhaka';
let RT = LOCATION_DATA['dhaka'];
let CY = 2026;

function getCityInfo(key){ return CITIES.find(c => c.key === key) || CITIES[0]; }

function parseTime(base, timeStr) {
  const [time, ampm] = timeStr.split(' ');
  let [h, m] = time.split(':').map(Number);
  if (ampm === 'PM' && h !== 12) h += 12;
  if (ampm === 'AM' && h === 12) h = 0;
  return new Date(base.getFullYear(), base.getMonth(), base.getDate(), h, m, 0);
}

const MEN  = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const MBN  = ['জানুয়ারি','ফেব্রুয়ারি','মার্চ','এপ্রিল','মে','জুন','জুলাই','আগস্ট','সেপ্টেম্বর','অক্টোবর','নভেম্বর','ডিসেম্বর'];
const HMTH = ['محرم','صفر','ربيع الأول','ربيع الثاني','جمادى الأولى','جمادى الآخرة','رجب','شعبان','رمضان','شوال','ذو القعدة','ذو الحجة'];
const BNMTH= ['বৈশাখ','জ্যৈষ্ঠ','আষাঢ়','শ্রাবণ','ভাদ্র','আশ্বিন','কার্তিক','অগ্রহায়ণ','পৌষ','মাঘ','ফাল্গুন','চৈত্র'];
const BND  = '০১২৩৪৫৬৭৮৯';
const ARD  = '٠١٢٣٤٥٦٧٨٩';
function bn(n){ return String(n).split('').map(d => BND[+d]).join(''); }
function ar(n){ return String(n).split('').map(d => ARD[+d]).join(''); }
function p2(n){ return String(n).padStart(2,'0'); }

// ── TABS ──
function sw(id){
  document.querySelectorAll('.tab').forEach((t,i) => {
    t.classList.toggle('active', ['ramadan','calendar','ramcal'][i] === id);
  });
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
}

// ── HIJRI ──
function gToH(gy, gm, gd){
  let y = gy, m = gm, d = gd;
  if(m < 3){ y--; m += 12; }
  let a = Math.floor(y/100), b = 2 - a + Math.floor(a/4);
  let jd = Math.floor(365.25*(y+4716)) + Math.floor(30.6001*(m+1)) + d + b - 1524;
  let l = jd - 1948440 + 10632, n = Math.floor((l-1)/10631);
  l = l - 10631*n + 354;
  let j = Math.floor((10985-l)/5316) * Math.floor(50*l/17719) + Math.floor(l/5670) * Math.floor(43*l/15238);
  l = l - Math.floor((30-j)/15) * Math.floor(17719*j/50) - Math.floor(j/16) * Math.floor(15238*j/43) + 29;
  let hM = Math.floor(24*l/709), hD = l - Math.floor(709*hM/24), hY = 30*n + j - 30;
  return { y: hY, m: hM, d: hD };
}

// ── BANGLA DATE ──
function _daySerial(y, m, d){
  const MC = [0,31,28,31,30,31,30,31,31,30,31,30,31];
  const leap = (y%4===0 && y%100!==0) || y%400===0;
  let n = 365*y + Math.floor(y/4) - Math.floor(y/100) + Math.floor(y/400);
  for(let i=1; i<m; i++) n += MC[i];
  if(m > 2 && leap) n++;
  return n + d;
}
function gToBn(year, month, day){
  let bnYear, gY;
  if(month > 4 || (month===4 && day>=14)){ bnYear = year-593; gY = year; }
  else { bnYear = year-594; gY = year-1; }
  const S = [
    _daySerial(gY,4,14), _daySerial(gY,5,15), _daySerial(gY,6,15),
    _daySerial(gY,7,16), _daySerial(gY,8,16), _daySerial(gY,9,16),
    _daySerial(gY,10,16), _daySerial(gY,11,15), _daySerial(gY,12,15),
    _daySerial(gY+1,1,14), _daySerial(gY+1,2,14), _daySerial(gY+1,3,15),
    _daySerial(gY+1,4,14)
  ];
  const inp = _daySerial(year, month, day);
  let bnMonth = 0, bnDay = 1;
  for(let i=0; i<12; i++){
    if(inp >= S[i] && inp < S[i+1]){ bnMonth = i; bnDay = inp - S[i] + 1; break; }
  }
  return { y: bnYear, m: bnMonth, d: bnDay };
}

// ── HOLIDAYS ──
const FIXED_HOL = {
  '01-01': { n:"New Year's Day",                  bn:'ইংরেজি নববর্ষ' },
  '02-21': { n:'Mother Language Day',              bn:'আন্তর্জাতিক মাতৃভাষা দিবস' },
  '03-17': { n:"Bangabandhu's Birthday",           bn:'বঙ্গবন্ধুর জন্মবার্ষিকী' },
  '03-26': { n:'Independence Day',                 bn:'স্বাধীনতা দিবস' },
  '04-14': { n:'Pahela Baishakh',                  bn:'পহেলা বৈশাখ / বাংলা নববর্ষ' },
  '05-01': { n:'Labour Day',                       bn:'আন্তর্জাতিক শ্রমিক দিবস' },
  '08-15': { n:'National Mourning Day',            bn:'জাতীয় শোক দিবস' },
  '12-16': { n:'Victory Day',                      bn:'বিজয় দিবস' },
  '12-25': { n:'Christmas Day',                    bn:'বড়দিন' },
};

const IHAL = {
  '2026-02-19': { n:'Ramadan Begins (1st Fast)',    bn:'রমজান শুরু — প্রথম রোজা ১৪৪৭' },
  '2026-03-20': { n:'Eid ul-Fitr',                 bn:'ঈদুল ফিতর' },
  '2026-03-21': { n:'Eid ul-Fitr (2nd Day)',       bn:'ঈদুল ফিতর — দ্বিতীয় দিন' },
  '2026-03-22': { n:'Eid ul-Fitr (3rd Day)',       bn:'ঈদুল ফিতর — তৃতীয় দিন' },
  '2026-05-27': { n:'Eid ul-Adha',                 bn:'ঈদুল আযহা' },
  '2026-05-28': { n:'Eid ul-Adha (2nd Day)',       bn:'ঈদুল আযহা — দ্বিতীয় দিন' },
  '2026-05-29': { n:'Eid ul-Adha (3rd Day)',       bn:'ঈদুল আযহা — তৃতীয় দিন' },
  '2026-07-10': { n:'Islamic New Year 1448',       bn:'ইসলামিক নববর্ষ ১৪৪৮' },
  '2026-07-19': { n:'Ashura',                      bn:'আশুরা — ১০ মুহররম' },
  '2026-09-05': { n:'Eid-e-Miladunnabi',           bn:'ঈদে মিলাদুন্নবী ﷺ' },
};

function getHol(y, m, d){
  const mmdd = p2(m) + '-' + p2(d);
  const ymd  = `${y}-${p2(m)}-${p2(d)}`;
  if(FIXED_HOL[mmdd]) return FIXED_HOL[mmdd];
  if(y === 2026 && IHAL[ymd]) return IHAL[ymd];
  return null;
}

const EVS = {
  '01-01': [
    { y:'',     t:"New Year's Day worldwide",                                     bn:'বিশ্বব্যাপী ইংরেজি নববর্ষ',                              tp:'intl' },
    { y:'1971', t:'Liberation War preparations',                                   bn:'মুক্তিযুদ্ধের প্রস্তুতি',                                 tp:'bd'   },
  ],
  '02-21': [
    { y:'1952', t:'Language Martyrs — Dhaka',                                     bn:'ভাষা শহীদ দিবস — ঢাকায় ছাত্র শহীদ',                      tp:'bd'   },
    { y:'1999', t:'UNESCO declares International Mother Language Day',             bn:'ইউনেস্কো আন্তর্জাতিক মাতৃভাষা দিবস ঘোষণা',               tp:'intl' },
  ],
  '03-07': [
    { y:'1971', t:"Bangabandhu's Historic 7th March Speech (UNESCO Memory of the World)", bn:'বঙ্গবন্ধুর ঐতিহাসিক ৭ই মার্চের ভাষণ — ইউনেস্কো স্মৃতি', tp:'bd' },
  ],
  '03-17': [
    { y:'1920', t:'Sheikh Mujibur Rahman born in Tungipara',                      bn:'বঙ্গবন্ধু টুঙ্গিপাড়ায় জন্মগ্রহণ করেন',                   tp:'bd'   },
  ],
  '03-25': [
    { y:'1971', t:'Operation Searchlight — Pakistani Army crackdown',             bn:'অপারেশন সার্চলাইট — পাকিস্তানি সেনাবাহিনীর গণহত্যা',    tp:'bd'   },
  ],
  '03-26': [
    { y:'1971', t:'Bangladesh Declaration of Independence',                       bn:'বাংলাদেশের স্বাধীনতা ঘোষণা',                              tp:'bd'   },
    { y:'1971', t:'Bangladesh Liberation War begins',                             bn:'মহান মুক্তিযুদ্ধ আরম্ভ',                                  tp:'bd'   },
  ],
  '04-14': [
    { y:'',     t:'Pahela Baishakh — Bengali New Year',                           bn:'পহেলা বৈশাখ — বাংলা নববর্ষ',                              tp:'bd'   },
  ],
  '05-01': [
    { y:'1886', t:"International Workers' Day — Haymarket, Chicago",              bn:'শ্রমিক দিবসের সূচনা — শিকাগো',                            tp:'intl' },
  ],
  '08-15': [
    { y:'1947', t:'India & Pakistan independence',                                bn:'ভারত ও পাকিস্তানের স্বাধীনতা',                            tp:'intl' },
    { y:'1975', t:'Bangabandhu Sheikh Mujibur Rahman assassinated',               bn:'বঙ্গবন্ধু শেখ মুজিবুর রহমান সপরিবারে নিহত',              tp:'bd'   },
  ],
  '12-16': [
    { y:'1971', t:'Victory Day — Pakistani Army surrenders in Dhaka',             bn:'বিজয় দিবস — পাকিস্তানের আত্মসমর্পণ, ঢাকা',               tp:'bd'   },
    { y:'1971', t:'93,000 Pakistani soldiers surrender — Liberation War ends',    bn:'৯৩,০০০ পাকিস্তানি সৈন্যের আত্মসমর্পণ — মুক্তিযুদ্ধের সমাপ্তি', tp:'bd' },
  ],
  '12-25': [
    { y:'',     t:'Christmas Day',                                                bn:'বড়দিন — যিশুখ্রিস্টের জন্মদিন',                          tp:'intl' },
  ],
};

// ── LOCATION MODAL ──
function buildCityGrid(){
  const g = document.getElementById('citygrid');
  g.innerHTML = '';
  CITIES.forEach(c => {
    const btn = document.createElement('div');
    btn.className = 'loc-city-btn' + (c.key === tempCity ? ' selected' : '');
    btn.innerHTML = `<span class="loc-city-ico">${c.icon}</span><span class="loc-city-en">${c.en}</span><span class="loc-city-bn">${c.bn}</span>`;
    btn.onclick = () => {
      tempCity = c.key;
      document.querySelectorAll('.loc-city-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    };
    g.appendChild(btn);
  });
}

function openLocModal(){
  tempCity = currentCity;
  buildCityGrid();
  document.getElementById('locOverlay').classList.add('show');
  document.body.style.overflow = 'hidden';
}
function closeLocModal(){
  document.getElementById('locOverlay').classList.remove('show');
  document.body.style.overflow = '';
}
function closeLocOut(e){ if(e.target === document.getElementById('locOverlay')) closeLocModal(); }

function confirmLocation(){
  currentCity = tempCity;
  RT = LOCATION_DATA[currentCity];
  const ci = getCityInfo(currentCity);
  document.getElementById('currentLocLabel').textContent = ci.bn;
  document.getElementById('prayerLocBadge').textContent = '📍 ' + ci.bn;
  document.getElementById('pdfLocLabel').textContent = `সম্পূর্ণ ৩০ দিনের সেহরি-ইফতার সময়সূচি — ${ci.bn}, বাংলাদেশ`;
  document.getElementById('ramcalLocNote').textContent = `${ci.bn}, বাংলাদেশ · সময়সূচি পরিবর্তিত হতে পারে`;
  updPrayers(); updProgress(); updCountdown(); buildRamCal();
  closeLocModal();
  showToast(`📍 ${ci.bn} — সময়সূচি আপডেট হয়েছে`);
}

function showToast(msg){
  let t = document.getElementById('toast');
  if(!t){
    t = document.createElement('div');
    t.id = 'toast';
    t.style.cssText = 'position:fixed;bottom:5rem;left:50%;transform:translateX(-50%);background:#1B5E47;color:white;padding:.6rem 1.2rem;border-radius:50px;font-family:"Noto Sans Bengali",sans-serif;font-size:.82rem;z-index:2000;box-shadow:0 4px 16px rgba(0,0,0,.3);transition:opacity .3s;white-space:nowrap';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.opacity = '1';
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.style.opacity = '0'; }, 2500);
}

// ── PRAYER TIMES ──
function calcP(date){
  const base = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const dayIdx = Math.floor((base - RAM_START) / 86400000);
  if(dayIdx >= 0 && dayIdx < RAM_DAYS){
    const row = RT[dayIdx];
    return {
      fajr:    parseTime(base, row[0]),
      dhuhr:   parseTime(base, row[1]),
      asr:     parseTime(base, row[2]),
      maghrib: parseTime(base, row[3]),
      isha:    parseTime(base, row[4]),
    };
  }
  const t = m => new Date(base.getTime() + m * 60000);
  return { fajr: t(4*60+50), dhuhr: t(12*60+10), asr: t(16*60), maghrib: t(18*60), isha: t(19*60+30) };
}

function fmtT(d, sec = false){
  return d.toLocaleTimeString('en-US', { hour:'2-digit', minute:'2-digit', ...(sec ? { second:'2-digit' } : {}), hour12: true });
}

// ── CLOCK ──
function updClock(){
  const now = new Date();
  document.getElementById('clockTime').textContent = fmtT(now, true);
  document.getElementById('clockEn').textContent   = now.toLocaleDateString('en-US', { weekday:'long', year:'numeric', month:'long', day:'numeric' });
  const h = gToH(now.getFullYear(), now.getMonth()+1, now.getDate());
  document.getElementById('clockAr').textContent   = `${ar(h.d)} ${HMTH[h.m-1]} ${ar(h.y)} هـ`;
  const bnd = gToBn(now.getFullYear(), now.getMonth()+1, now.getDate());
  document.getElementById('clockBn').textContent   = `${bn(bnd.d)} ${BNMTH[bnd.m]}, ${bn(bnd.y)}`;
}

// ── PROGRESS ──
function updProgress(){
  const now = new Date();
  if(now < RAM_START){
    const d = Math.ceil((RAM_START - now) / 86400000);
    document.getElementById('progLbl').textContent  = `শুরু হতে ${d} দিন`;
    document.getElementById('progPct').textContent  = '0%';
    document.getElementById('progFill').style.width = '0%';
    document.getElementById('dComp').textContent    = '0';
    document.getElementById('dLeft').textContent    = '30';
  } else if(now <= RAM_END){
    const dp = Math.floor((now - RAM_START) / 86400000) + 1;
    const dl = RAM_DAYS - dp;
    const pct = Math.round((dp / RAM_DAYS) * 100);
    document.getElementById('progLbl').textContent  = `Day ${dp} of ${RAM_DAYS}`;
    document.getElementById('progPct').textContent  = pct + '%';
    document.getElementById('progFill').style.width = pct + '%';
    document.getElementById('dComp').textContent    = dp;
    document.getElementById('dLeft').textContent    = dl;
  } else {
    document.getElementById('progLbl').textContent  = 'রমজান সম্পন্ন ✓';
    document.getElementById('progPct').textContent  = '100%';
    document.getElementById('progFill').style.width = '100%';
    document.getElementById('dComp').textContent    = '30';
    document.getElementById('dLeft').textContent    = '0';
  }
}

// ── PRAYERS ──
function updPrayers(){
  const now = new Date(), P = calcP(now);
  const idx = Math.floor((new Date(now.getFullYear(), now.getMonth(), now.getDate()) - RAM_START) / 86400000);
  if(idx >= 0 && idx < RAM_DAYS){
    const row = RT[idx];
    document.getElementById('t-fajr').textContent   = row[0];
    document.getElementById('t-dhuhr').textContent  = row[1];
    document.getElementById('t-asr').textContent    = row[2];
    document.getElementById('t-maghrib').textContent= row[3];
    document.getElementById('t-isha').textContent   = row[4];
    document.getElementById('suhoorT').textContent  = row[0];
    document.getElementById('iftarT').textContent   = row[3];
    const ci = getCityInfo(currentCity);
    const sc = document.getElementById('todaySchedule');
    if(sc){
      sc.innerHTML = `
        <div class="tday-hd">আজকের রমজান সময়সূচি — ${bn(idx+1)} রমজান · ${ci.bn}</div>
        <div class="tday-row"><span class="tday-lbl">🌅 সেহরি শেষ</span><span class="tday-val">${row[0]}</span></div>
        <div class="tday-row"><span class="tday-lbl">🕌 ফজর</span><span class="tday-val">${row[0]}</span></div>
        <div class="tday-row"><span class="tday-lbl">☀️ যোহর</span><span class="tday-val">${row[1]}</span></div>
        <div class="tday-row"><span class="tday-lbl">🌤️ আসর</span><span class="tday-val">${row[2]}</span></div>
        <div class="tday-row tday-iftar"><span class="tday-lbl">🍽️ ইফতার</span><span class="tday-val">${row[3]}</span></div>
        <div class="tday-row"><span class="tday-lbl">🌙 এশা</span><span class="tday-val">${row[4]}</span></div>`;
    }
  } else {
    ['fajr','dhuhr','asr','maghrib','isha'].forEach(k => document.getElementById('t-'+k).textContent = fmtT(P[k]));
    document.getElementById('suhoorT').textContent = fmtT(P.fajr);
    document.getElementById('iftarT').textContent  = fmtT(P.maghrib);
    const sc = document.getElementById('todaySchedule');
    if(sc) sc.innerHTML = `<p style="text-align:center;color:var(--ink-light);padding:1rem;font-family:'Noto Sans Bengali',sans-serif">রমজান মাসের বাইরে সময়সূচি নেই</p>`;
  }
  const arr = [P.fajr, P.dhuhr, P.asr, P.maghrib, P.isha];
  const items = document.querySelectorAll('.prayer-item');
  items.forEach(i => i.classList.remove('active'));
  for(let i=0; i<5; i++){
    if(now >= arr[i] && (i===4 || now < arr[i+1])){ items[i].classList.add('active'); break; }
  }
}

// ── COUNTDOWN ──
function updCountdown(){
  const now = new Date(), P = calcP(now);
  const prayers = [
    { n:'ফজর',    t: P.fajr    },
    { n:'যোহর',   t: P.dhuhr   },
    { n:'আসর',    t: P.asr     },
    { n:'মাগরিব', t: P.maghrib },
    { n:'এশা',    t: P.isha    },
  ];
  let next = prayers.find(p => now < p.t);
  if(!next){
    const tm = new Date(now); tm.setDate(tm.getDate() + 1);
    const nIdx = Math.floor((new Date(tm.getFullYear(), tm.getMonth(), tm.getDate()) - RAM_START) / 86400000);
    if(nIdx >= 0 && nIdx < RAM_DAYS){
      next = { n:'ফজর', t: parseTime(new Date(tm.getFullYear(), tm.getMonth(), tm.getDate()), RT[nIdx][0]) };
    } else {
      next = { n:'ফজর', t: calcP(tm).fajr };
    }
  }
  const diff = next.t - now;
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  document.getElementById('nextPNm').textContent = `পরবর্তী: ${next.n}`;
  document.getElementById('nextPTm').textContent = `${p2(h)}:${p2(m)}:${p2(s)}`;
}

// ── VERSE / QUOTE ──
const VERSES = [
  { t:'"O you who have believed, decreed upon you is fasting as it was decreed upon those before you that you may become righteous."', r:'Quran 2:183' },
  { t:'"The month of Ramadan in which was revealed the Quran, a guidance for the people and clear proofs of guidance and criterion."', r:'Quran 2:185' },
  { t:'"And when My servants ask you concerning Me — indeed I am near. I respond to the invocation of the supplicant when he calls upon Me."', r:'Quran 2:186' },
  { t:'"Whoever fasts Ramadan with faith and seeking reward, his previous sins will be forgiven."', r:'Hadith — Bukhari' },
  { t:'"When Ramadan begins, the gates of Paradise are opened, the gates of Hell are closed, and the devils are chained."', r:'Hadith — Muslim' },
  { t:'"Indeed, We sent the Quran down during the Night of Decree. And what can make you know what the Night of Decree is?"', r:'Quran 97:1-2' },
];
const QUOTES = [
  { en:'"Indeed, Allah is with the patient."',                              bn:'"নিশ্চয়ই আল্লাহ ধৈর্যশীলদের সাথে আছেন।"',                    ref:'Quran 2:153' },
  { en:'"So remember Me; I will remember you."',                            bn:'"তোমরা আমাকে স্মরণ কর, আমি তোমাদের স্মরণ করব।"',              ref:'Quran 2:152' },
  { en:'"Verily, with hardship comes ease."',                               bn:'"নিশ্চয়ই কষ্টের সাথে স্বস্তি আছে।"',                          ref:'Quran 94:6'  },
  { en:'"The best of you is he who learns the Quran and teaches it."',      bn:'"তোমাদের মধ্যে সেই উত্তম যে কোরআন শিখে এবং শেখায়।"',         ref:'Hadith — Bukhari' },
  { en:'"Speak good or remain silent."',                                    bn:'"ভালো কথা বলো, নইলে চুপ থাকো।"',                              ref:'Hadith — Bukhari & Muslim' },
  { en:'"A good word is charity."',                                         bn:'"একটি ভালো কথাও সদকা।"',                                       ref:'Hadith — Bukhari' },
];

function showVerse(){
  const now = new Date();
  const idx = Math.floor((new Date(now.getFullYear(), now.getMonth(), now.getDate()) - RAM_START) / 86400000);
  const dy = (idx >= 0 && idx < RAM_DAYS) ? idx : Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000);
  const v = VERSES[dy % VERSES.length];
  document.getElementById('verseText').textContent = v.t;
  document.getElementById('verseRef').textContent  = '— ' + v.r;
  const q = QUOTES[dy % QUOTES.length];
  document.getElementById('quoteEn').textContent   = q.en;
  document.getElementById('quoteBn').textContent   = q.bn;
  document.getElementById('quoteRef').textContent  = '— ' + q.ref;
}

// ── 30-DAY RAMADAN CAL ──
const PDF_DATES = [
  'Thu, Feb 19','Fri, Feb 20','Sat, Feb 21','Sun, Feb 22','Mon, Feb 23',
  'Tue, Feb 24','Wed, Feb 25','Thu, Feb 26','Fri, Feb 27','Sat, Feb 28',
  'Sun, Mar 01','Mon, Mar 02','Tue, Mar 03','Wed, Mar 04','Thu, Mar 05',
  'Fri, Mar 06','Sat, Mar 07','Sun, Mar 08','Mon, Mar 09','Tue, Mar 10',
  'Wed, Mar 11','Thu, Mar 12','Fri, Mar 13','Sat, Mar 14','Sun, Mar 15',
  'Mon, Mar 16','Tue, Mar 17','Wed, Mar 18','Thu, Mar 19','Fri, Mar 20',
];

function buildRamCal(){
  const g = document.getElementById('ramcalGrid');
  g.innerHTML = '';
  const ci = getCityInfo(currentCity);
  for(let day = 1; day <= RAM_DAYS; day++){
    const date = new Date(RAM_START);
    date.setDate(date.getDate() + day - 1);
    const row = RT[day - 1];
    const card = document.createElement('div');
    card.className = 'rc-card';
    card.innerHTML = `
      <div class="rc-hd">
        <div class="rc-day">${day}</div>
        <div class="rc-date">
          <span style="font-weight:700;color:var(--em)">${date.toLocaleDateString('en-US',{weekday:'short'})}</span><br>
          ${date.toLocaleDateString('en-US',{month:'short',day:'numeric'})}<br>
          <span style="font-family:'Noto Sans Bengali',sans-serif;font-size:.72rem;color:var(--gold)">${bn(day)} রমজান</span>
        </div>
      </div>
      <div class="rc-row"><div class="rc-lbl">🌅 সেহরি শেষ</div><div class="rc-val">${row[0]}</div></div>
      <div class="rc-row"><div class="rc-lbl">🕌 ফজর</div><div class="rc-val">${row[0]}</div></div>
      <div class="rc-row"><div class="rc-lbl">☀️ যোহর</div><div class="rc-val">${row[1]}</div></div>
      <div class="rc-row"><div class="rc-lbl">🌤️ আসর</div><div class="rc-val">${row[2]}</div></div>
      <div class="rc-row" style="background:rgba(200,150,62,.15)">
        <div class="rc-lbl">🍽️ ইফতার</div>
        <div class="rc-val" style="color:var(--gold);font-weight:700">${row[3]}</div>
      </div>
      <div class="rc-row"><div class="rc-lbl">🌙 এশা</div><div class="rc-val">${row[4]}</div></div>`;
    g.appendChild(card);
  }
}

// ── YEAR CALENDAR ──
function buildYearCal(year){
  const g = document.getElementById('monthsGrid');
  g.innerHTML = '';
  document.getElementById('yrDisp').textContent   = year;
  document.getElementById('hdYear').textContent   = year;
  document.getElementById('titleYear').textContent = year;
  for(let m = 1; m <= 12; m++) g.appendChild(buildMCard(year, m));
}

function buildMCard(year, month){
  const card = document.createElement('div');
  card.className = 'm-card';
  card.id = `mc-${year}-${month}`;
  const mid = new Date(year, month-1, 15);
  const hm  = gToH(mid.getFullYear(), mid.getMonth()+1, mid.getDate());
  const MBN2 = ['জানুয়ারি','ফেব্রুয়ারি','মার্চ','এপ্রিল','মে','জুন','জুলাই','আগস্ট','সেপ্টেম্বর','অক্টোবর','নভেম্বর','ডিসেম্বর'];
  card.innerHTML = `
    <div class="m-hdr" onclick="togM('mc-${year}-${month}')">
      <div>
        <div class="m-en">${MEN[month-1]}</div>
        <div class="m-bn-n">${MBN2[month-1]}</div>
      </div>
      <div class="m-right"><span class="m-ar-n">${HMTH[hm.m-1]} ${ar(hm.y)}</span></div>
      <span class="tog">▾</span>
    </div>
    <div class="cal-body">
      <div class="wdays">${['Su','Mo','Tu','We','Th','Fr','Sa'].map((d,i) => `<div class="wday${i===5?' fri':''}">${d}</div>`).join('')}</div>
      <div class="days-grid">${buildDays(year, month)}</div>
    </div>`;
  return card;
}

function buildDays(year, month){
  const first = new Date(year, month-1, 1).getDay();
  const total = new Date(year, month, 0).getDate();
  const today = new Date();
  let html = '';
  for(let i = 0; i < first; i++) html += `<div class="day-cell empty"></div>`;
  for(let d = 1; d <= total; d++){
    const date = new Date(year, month-1, d), dow = date.getDay();
    const hol  = getHol(year, month, d);
    const isToday = d === today.getDate() && month === today.getMonth()+1 && year === today.getFullYear();
    const mmdd = p2(month) + '-' + p2(d);
    const hasEv = EVS[mmdd] && EVS[mmdd].length > 0;
    const hijri = gToH(year, month, d), bnd = gToBn(year, month, d);
    let cls = 'day-cell';
    if(hol)        cls += ' holiday';
    else if(dow===5) cls += ' friday';
    if(isToday)    cls += ' today';
    if(hasEv)      cls += ' has-event';
    html += `<div class="${cls}" onclick="openModal(${year},${month},${d})">
      <span class="d-en">${d}</span>
      <span class="d-ar">${ar(hijri.d)}</span>
      <span class="d-bn">${bn(bnd.d)}</span>
    </div>`;
  }
  return html;
}

function togM(id){ document.getElementById(id).classList.toggle('collapsed'); }
function expandAll(){ document.querySelectorAll('.m-card').forEach(c => c.classList.remove('collapsed')); }
function collapseAll(){ document.querySelectorAll('.m-card').forEach(c => c.classList.add('collapsed')); }
function chgYear(d){ CY += d; buildYearCal(CY); }
function goToday(){
  CY = new Date().getFullYear();
  buildYearCal(CY);
  sw('calendar');
  setTimeout(() => {
    const now  = new Date();
    const card = document.getElementById(`mc-${CY}-${now.getMonth()+1}`);
    if(card){ card.classList.remove('collapsed'); card.scrollIntoView({ behavior:'smooth', block:'center' }); }
  }, 200);
}

// ── CAL DAY MODAL ──
function openModal(year, month, day){
  const date = new Date(year, month-1, day), mmdd = p2(month) + '-' + p2(day);
  document.getElementById('mEn').textContent = date.toLocaleDateString('en-US', { weekday:'long', year:'numeric', month:'long', day:'numeric' });
  const h = gToH(year, month, day);
  document.getElementById('mAr').textContent = `${ar(h.d)} ${HMTH[h.m-1]} ${ar(h.y)} هـ`;
  const bnd = gToBn(year, month, day);
  document.getElementById('mBn').textContent = `${bn(bnd.d)} ${BNMTH[bnd.m]}, ${bn(bnd.y)}`;
  const hol = getHol(year, month, day), isFri = date.getDay() === 5;
  const badge = document.getElementById('mBadge');
  if(hol)       badge.innerHTML = `<div class="hol-badge">🔴 সরকারি ছুটি — ${hol.bn}</div>`;
  else if(isFri) badge.innerHTML = `<div class="hol-badge" style="background:#b71c1c">🔴 শুক্রবার — সাপ্তাহিক ছুটি</div>`;
  else           badge.innerHTML = '';
  const evs     = EVS[mmdd] || [];
  const bdEvs   = evs.filter(e => e.tp === 'bd');
  const intlEvs = evs.filter(e => e.tp === 'intl');
  let bdH = `<div class="ev-section"><div class="ev-title">🇧🇩 বাংলাদেশ</div>`;
  if(hol) bdH += `<div class="ev-item holiday"><div class="ev-yr">ছুটি</div><div class="ev-txt">${hol.bn}<br><span class="en">${hol.n}</span></div></div>`;
  bdEvs.forEach(e => { bdH += `<div class="ev-item"><div class="ev-yr">${e.y||'—'}</div><div class="ev-txt">${e.bn}<br><span class="en">${e.t}</span></div></div>`; });
  if(!hol && !bdEvs.length) bdH += `<p class="no-ev">কোনো বিশেষ ঘটনা নেই</p>`;
  bdH += '</div>';
  document.getElementById('mBD').innerHTML = bdH;
  let intlH = '';
  if(intlEvs.length){
    intlH = `<div class="ev-section"><div class="ev-title">🌍 আন্তর্জাতিক</div>`;
    intlEvs.forEach(e => { intlH += `<div class="ev-item intl"><div class="ev-yr">${e.y||'—'}</div><div class="ev-txt"><span class="en">${e.t}</span><br>${e.bn}</div></div>`; });
    intlH += '</div>';
  }
  document.getElementById('mIntl').innerHTML = intlH;
  document.getElementById('overlay').classList.add('show');
  document.body.style.overflow = 'hidden';
}
function closeModal(){ document.getElementById('overlay').classList.remove('show'); document.body.style.overflow = ''; }
function closeOut(e){ if(e.target === document.getElementById('overlay')) closeModal(); }
document.addEventListener('keydown', e => {
  if(e.key === 'Escape'){ closeModal(); closeLocModal(); closeDonation(); }
});

// ── DONATE ──
function openDonation(){ document.getElementById('donOverlay').classList.add('show'); document.body.style.overflow = 'hidden'; }
function closeDonation(){ document.getElementById('donOverlay').classList.remove('show'); document.body.style.overflow = ''; }
function closeDonOut(e){ if(e.target === document.getElementById('donOverlay')) closeDonation(); }

function copyNumber(num, btnId){
  const doIt = () => {
    const btn = document.getElementById(btnId);
    btn.textContent = '✓ Copied!';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 2000);
  };
  if(navigator.clipboard){
    navigator.clipboard.writeText(num).then(doIt).catch(() => {
      const el = document.createElement('textarea'); el.value = num;
      document.body.appendChild(el); el.select(); document.execCommand('copy');
      document.body.removeChild(el); doIt();
    });
  } else {
    const el = document.createElement('textarea'); el.value = num;
    document.body.appendChild(el); el.select(); document.execCommand('copy');
    document.body.removeChild(el); doIt();
  }
}

// ── PDF EXPORT ──
function buildPDFHTML(useBn, useEn, useColor){
  const ci = getCityInfo(currentCity);
  const C = useColor ? {
    headerBg:'#1B5E47', headerText:'#fff', gold:'#C8963E', subtext:'rgba(255,255,255,0.75)',
    altRow:'#F5F1EB', fridayBg:'#FFF0F0', fridayText:'#C62828',
    iftarBg:'#FFF8E1', iftarText:'#C8963E', border:'#d4a84b',
    rowBorder:'#E8E0D0', ink:'#1A1208', white:'#fff',
  } : {
    headerBg:'#333', headerText:'#fff', gold:'#555', subtext:'rgba(255,255,255,0.7)',
    altRow:'#F2F2F2', fridayBg:'#EBEBEB', fridayText:'#555',
    iftarBg:'#E8E8E8', iftarText:'#333', border:'#aaa',
    rowBorder:'#ddd', ink:'#111', white:'#fff',
  };
  const fridayIdxs = [1,8,15,22,29];
  const colH = [];
  if(useBn && useEn) colH.push('দিন<br><small>Day</small>','তারিখ<br><small>Date</small>','সেহরি শেষ<br><small>Suhoor</small>','ফজর<br><small>Fajr</small>','যোহর<br><small>Dhuhr</small>','আসর<br><small>Asr</small>','ইফতার<br><small>Iftar</small>','এশা<br><small>Isha</small>');
  else if(useBn)     colH.push('দিন','তারিখ','সেহরি শেষ','ফজর','যোহর','আসর','ইফতার','এশা');
  else               colH.push('Day','Date','Suhoor Ends','Fajr','Dhuhr','Asr','Iftar','Isha');
  const rows = RT.map((row, i) => {
    const isFri  = fridayIdxs.includes(i);
    const rowBg  = isFri ? C.fridayBg : (i%2===0 ? C.white : C.altRow);
    const textColor = isFri ? C.fridayText : C.ink;
    const dayNum = useBn ? bn(i+1) : String(i+1);
    return `<tr style="background:${rowBg};color:${textColor}">
      <td style="font-weight:700;color:${useColor?'#1B5E47':'#333'};font-size:13px">${dayNum}</td>
      <td style="font-size:11px">${PDF_DATES[i]}${isFri ? ` <span style="color:${C.fridayText};font-size:9px">●</span>` : ''}</td>
      <td style="font-size:12px">${row[0]}</td>
      <td style="font-size:12px">${row[0]}</td>
      <td style="font-size:12px">${row[1]}</td>
      <td style="font-size:12px">${row[2]}</td>
      <td style="background:${C.iftarBg};color:${C.iftarText};font-weight:700;font-size:13px">${row[3]}</td>
      <td style="font-size:12px">${row[4]}</td>
    </tr>`;
  }).join('');
  return `<!DOCTYPE html><html><head><meta charset="UTF-8">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;600;700&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Noto Sans Bengali','Segoe UI',Arial,sans-serif;background:#fff;color:${C.ink}}
.page{width:1122px;padding:22px;background:#fff}
.header{background:${C.headerBg};padding:18px 22px 14px;border-radius:10px 10px 0 0;text-align:center}
.header h1{font-size:20px;font-weight:700;color:#fff;margin-bottom:4px}
.header .subtitle{font-size:13px;color:${C.subtext}}
.header .meta{font-size:12px;color:${C.subtext};margin-top:4px}
table{width:100%;border-collapse:collapse;font-family:'Noto Sans Bengali','Segoe UI',Arial,sans-serif}
thead tr{background:${C.headerBg}}
th{color:${C.headerText};font-size:12px;font-weight:700;padding:10px 8px;text-align:center;border-right:1px solid rgba(255,255,255,0.2);line-height:1.4}
th:last-child{border-right:none}
td{padding:7px 8px;text-align:center;border-bottom:1px solid ${C.rowBorder};border-right:1px solid ${C.rowBorder};font-family:'Noto Sans Bengali','Segoe UI',Arial,sans-serif;line-height:1.3}
td:last-child{border-right:none}
.footer{background:${C.headerBg};padding:10px 22px;border-radius:0 0 10px 10px;display:flex;justify-content:space-between;align-items:center}
.footer span{font-size:11px;color:${C.subtext}}
.legend{display:flex;gap:16px;padding:8px 0 5px;font-size:11px;color:#6B5B40;flex-wrap:wrap}
.leg-dot{width:10px;height:10px;border-radius:2px;display:inline-block;margin-right:4px;vertical-align:middle}
</style></head><body><div class="page">
<div class="header">
  <h1>রমজান ক্যালেন্ডার ২০২৬ — ${ci.bn} · Ramadan Calendar 1447 AH</h1>
  <div class="subtitle">${ci.bn}, বাংলাদেশ · ${ci.en}, Bangladesh</div>
  <div class="meta">১৯ ফেব্রুয়ারি — ২০ মার্চ ২০২৬ · 19 February — 20 March 2026 · BST UTC+6</div>
</div>
<table>
  <thead><tr>${colH.map(h => `<th>${h}</th>`).join('')}</tr></thead>
  <tbody>${rows}</tbody>
</table>
<div class="legend">
  <span><span class="leg-dot" style="background:${C.iftarBg};border:1px solid ${C.iftarText}"></span>ইফতার / Iftar</span>
  <span><span class="leg-dot" style="background:${C.fridayBg};border:1px solid ${C.fridayText}"></span>শুক্রবার / Friday</span>
  <span style="margin-left:auto;font-size:10px;color:#999">সময় পরিবর্তিত হতে পারে · islamicfinder.org</span>
</div>
<div class="footer">
  <span>© ২০২৬ রমজান ক্যালেন্ডার — ${ci.bn}, বাংলাদেশ</span>
  <span>📱 bKash/Nagad/Rocket: 01735144475</span>
</div>
</div></body></html>`;
}

async function generateRamadanPDF(){
  const btn = document.getElementById('pdfBtn');
  btn.disabled = true;
  btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;animation:spin .8s linear infinite"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> তৈরি হচ্ছে...`;
  const useBn      = document.getElementById('chk-bn').checked;
  const useEn      = document.getElementById('chk-en').checked;
  const useColor   = document.getElementById('chk-color').checked;
  const landscape  = document.getElementById('chk-landscape').checked;
  try {
    const iframe = document.createElement('iframe');
    iframe.style.cssText = 'position:fixed;left:-9999px;top:0;width:1166px;height:900px;border:none;visibility:hidden';
    document.body.appendChild(iframe);
    iframe.contentDocument.open();
    iframe.contentDocument.write(buildPDFHTML(useBn, useEn, useColor));
    iframe.contentDocument.close();
    await new Promise(r => setTimeout(r, 1800));
    const pageEl = iframe.contentDocument.querySelector('.page');
    if(!pageEl) throw new Error('Page element not found');
    const canvas = await html2canvas(pageEl, {
      scale: 2, useCORS: true, allowTaint: true,
      backgroundColor: '#ffffff', logging: false,
      windowWidth: 1166, windowHeight: pageEl.scrollHeight + 50,
    });
    document.body.removeChild(iframe);
    const { jsPDF } = window.jspdf;
    const orient = landscape ? 'landscape' : 'portrait';
    const doc    = new jsPDF({ orientation: orient, unit: 'mm', format: 'a4' });
    const pageW  = landscape ? 297 : 210, pageH = landscape ? 210 : 297, margin = 8;
    const contentW = pageW - margin * 2;
    const imgData  = canvas.toDataURL('image/png');
    const scale    = (contentW * 3.7795) / canvas.width;
    const pxPerPage = Math.floor((pageH - margin*2) / scale * 3.7795);
    let pages = Math.ceil(canvas.height / pxPerPage); if(pages < 1) pages = 1;
    for(let p = 0; p < pages; p++){
      if(p > 0) doc.addPage();
      const srcY = p * pxPerPage, srcH = Math.min(pxPerPage, canvas.height - srcY);
      const sliceH = (srcH * scale) / 3.7795;
      const sc = document.createElement('canvas'); sc.width = canvas.width; sc.height = srcH;
      const ctx = sc.getContext('2d');
      ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, sc.width, sc.height);
      ctx.drawImage(canvas, 0, srcY, canvas.width, srcH, 0, 0, canvas.width, srcH);
      doc.addImage(sc.toDataURL('image/jpeg', .95), 'JPEG', margin, margin, contentW, sliceH);
      doc.setFontSize(8); doc.setTextColor(150,150,150);
      const ci = getCityInfo(currentCity);
      doc.text(`Page ${p+1} of ${pages}  ·  Ramadan 2026 — ${ci.en}, Bangladesh`, pageW/2, pageH-4, { align:'center' });
    }
    const ci = getCityInfo(currentCity);
    doc.save(`Ramadan-2026-${ci.en}-${landscape?'landscape':'portrait'}-${useColor?'color':'bw'}.pdf`);
  } catch(e){
    console.error('PDF error:', e);
    alert('PDF তৈরিতে সমস্যা হয়েছে।\nError: ' + e.message);
  }
  btn.disabled = false;
  btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> PDF ডাউনলোড`;
}

// ── INIT ──
function init(){
  updClock();
  updProgress();
  updPrayers();
  updCountdown();
  showVerse();
  buildRamCal();
  buildYearCal(CY);
  setInterval(() => { updClock(); updCountdown(); }, 1000);
  setInterval(updPrayers, 60000);
  setInterval(updProgress, 3600000);
}
window.addEventListener('load', init);
