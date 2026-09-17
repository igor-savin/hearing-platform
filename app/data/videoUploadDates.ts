// YouTube publish dates for every embedded video, read from each watch page's
// uploadDate on 16 Sep 2026. Google requires uploadDate on VideoObject; without
// it all 16 video items were reported invalid in Search Console.
//
// When you add a video to pageVideos.ts or pageVideosManual.ts, add its date
// here too. A video with no date gets no VideoObject schema (the embed still
// renders), so a missing entry can never produce an invalid item.
export const videoUploadDates: Record<string, string> = {
  "_E3env6Z_zo": "2023-12-07T06:00:08-08:00",
  "X4TRtz1Ze_c": "2026-01-09T06:01:02-08:00",
  "OTQUD3DKXi4": "2017-09-05T10:01:22-07:00",
  "gzX6A5w0ilE": "2024-02-22T07:54:47-08:00",
  "Guo_O9duNz0": "2024-08-05T21:27:27-07:00",
  "ZZGkgKNjl3Y": "2025-02-04T00:00:19-08:00",
  "iYCF9mHtVJ0": "2022-11-09T23:41:28-08:00",
  "0fHS3TYitA8": "2025-02-24T00:53:25-08:00",
  "yjJOhxOC1r0": "2026-08-23T20:00:23-07:00",
  "oGWxYOMZoGc": "2026-08-24T03:16:33-07:00",
  "38q7GgjS--I": "2024-10-15T08:16:48-07:00",
  "SpFXfGdDb9E": "2025-03-18T16:14:39-07:00",
  "4F1pkDhb8ys": "2019-04-27T08:58:16-07:00",
  "c69B0hGHoqg": "2026-08-23T23:44:33-07:00",
  "shJqytzMB9I": "2026-08-23T22:09:09-07:00",
  "cdkj1EevZGs": "2026-08-23T22:08:36-07:00",
};
