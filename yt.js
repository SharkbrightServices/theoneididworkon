const axios = require('axios');
const fs = require('fs');
const PORT = 3000;

const channelIDs = [
 'UCX6OQ3DkcsbYNE6H8uQQuVA',
'UCq-Fj5jknLsUf-MWSy4_brA',
'UCbCmjCuTUZos6Inko4u57UQ',
'UCpEhnqL0y41EpW2TvWAHD7Q',
'UCvlE5gTbOvjiolFlEm-c_Ow',
'UCk8GzjMOrta8yxDcKfylJYw',
'UCJplp5SjeGSdVdwsfb9Q7lQ',
'UCbp9MyKCTEww4CxEzc_Tp0Q',
'UCFFbwnve3yF62-tVXkTyHqg',
'UC-lHJZR3Gqxm24_Vd_AJ5Yw',
'UCJ5v_MCY6GNUBTO8-D3XoAg',
'UCyoXW-Dse7fURq30EWl_CUA',
'UCiVs2pnGW5mLIc1jS2nxhjg',
'UC6-F5tO8uklgE9Zy8IvbdFw',
'UCOmHUn--16B90oW2L6FRR3A',
'UCBnZ16ahKA2DZ_T5W0FPUXg',
'UC5gxP-2QqIh_09djvlm9Xcg',
'UCppHT7SZKKvar4Oc9J4oljQ',
'UCcdwLMPsaU2ezNSJU1nFoBQ',
'UC295-Dw_tDNtZXFeAPAW6Aw',
'UCLkAepWjdylmXSltofFvsYQ',
'UC55IWqFLDH1Xp7iu1_xknRA',
'UC2tsySbe9TNrI-xh2lximHA',
'UC3IZKseVpdzPSBaWxBxundA',
'UCrnQFuUabBHaw-BRhPo8xEA',
'UCaayLD9i5x4MmIoVZxXSv_g',
'UCIwFjwMjI0y7PDBVEO9-bkQ',
'UCtxD0x6AuNNqdXO9Wp5GHew',
'UCJrDMFOdv1I2k8n9oK_V21w',
'UCgFXm4TI8htWmCyJ6cVPG_A',
'UCP6uH_XlsxrXwZQ4DlqbqPg',
'UCL5nlHWXVLeOsSjKH2fhmsg',
'UCt4t-jeY85JegMlZ-E5UWtA',
'UC1ciY6kR3yj3kaKZ6R7ewAg',
'UCK1i2UviaXLUNrZlAFpw_jA',
'UCffDXn7ycAzwL2LDlbyWOTw',
'UCY1kMZp36IQSyNx_9h4mpCg',
'UCe9JSDmyqNgA_l2BzGHq1Ug',
'UCoQm-PeHC-cbJclKJYJ8LzA',
'UC22nIfOTM7KLIQuFGMKzQbg',
'UC56gTxNs4f9xZ7Pa2i5xNzg',
'UCbTLwN10NoCU4WDzLf1JMOA',
'UCfM3zsQsOnfWNUppiycmBuw',
'UC3gNmTGu-TTbFPpfSs5kNkg',
'UCZs0WwC0Dn_noiQE2BHSTKg',
'UC4JCksJF76g_MdzPVBJoC3Q',
'UCPuEAY09CtdTzFNWuqVZgDw',
'UCOnIJiQuk1fDSp6p1GCZy3A',
'UCRijo3ddMTht_IHyNSNXpNQ',
'UCqECaJ8Gagnn7YCbPEzWH6g',
'UC4NALVCmcmL5ntpV0thoH6w',
'UC6QZ_ss3i_8qLV_RczPZBkw',
'UC0Wju2yvRlfwqraLlz5152Q',
'UC4wEPe5mrHGAUjjTfXH_C-Q',
'UCF1JIbMUs6uqoZEY1Haw0GQ',
'UCEdvpU2pFRCVqU6yIPyTpMQ',
'UCRx3mKNUdl8QE06nEug7p6Q',
'UC0C-w0YjGpqDXGB8IHb662A',
'UCyagEfIN1okQ-s996XAqCFQ',
'UCqJ5zFEED1hWs0KNQCQuYdQ',
'UCMgapddJymOC6MBOiOqia1A',
'UC9CoOnJkIBMdeijd9qYoT_g',
'UC3MLnJtqc_phABBriLRhtgQ',
'UCiGm_E4ZwYSHV3bcW1pnSeQ',
'UC-LPIU24bQXVljUXivKEeRQ',
'UCXbYlU08sOTBktOtjVsvR6w',
'UC_A7K2dXFsTMAciGmnNxy-Q',
'UCJg19noZp7-BYIGvypu_cow',
'UCvh1at6xpV1ytYOAzxmqUsA',
'UCYiGq8XF7YQD00x7wAd62Zg',
'UCVNouUw3d3l5JYVCxhAQXKA',
'UCstEtN0pgOmCf02EdXsGChw',
'UCgKEvLp8DXCTMq4QY6wW7bw',
'UC_gV70G_Y51LTa3qhu8KiEA',
'UCd5ApCORQsMOZZz5E9oVeFA',
'UC6gVx_vALsYT-z_u1djJbBQ',
'UCwHE1kM1CPJd_pI9FQ0-4dg',
'UCEeEQxm6qc_qaTE7qTV5aLQ',
'UCmBA_wu8xGg1OfOkfW13Q0Q',
'UCQ7x25F6YXY9DvGeHFxLhRQ',
'UC4-79UOlP48-QNGgCko5p2g',
'UCWi_65E_L8tQZ34C6wVAlpQ',
'UCo6y9hnRawAqtyWhRhblXqg',
'UCV4xOVpbcV8SdueDCOxLXtQ',
'UCzoUWqjCbcfWFdOMvoep8FA',
'UCKe6w0exI94U-RzqAyoY1VA',
'UCRWFSbif-RFENbBrSiez1DA',
'UCYWOjHweP2V-8kGKmmAmQJQ',
'UCV306eHqgo0LvBf3Mh36AHg',
'UCIPPMRA040LQr5QPyJEbmXA',
'UCRm96I5kmb_iGFofE5N691w',
'UCQZfFRohQ7UX-0CdXl-6pwQ',
'UCOsyDsO5tIt-VZ1iwjdQmew',
'UCttspZesZIDEwwpVIgoZtWQ',
'UC1a2ZCw7tugRZYRMnecNj3A',
'UCj-SWZSE0AmotGSQ3apROHw',
'UCNzmmbXIbMzlqE8nD1PBXfg',
'UCj0O6W8yDuLg3iraAXKgCrQ',
'UCgJ5_1F6yJhYLnyMszUdmUg',
'UCtW7qWjpCZ8zps-Cf2NF26w',  //goldmines gaane sune
'UClZkHt2kNIgyrTTPnSQV3SA',
'UCu59yAFE8fM0sVNTipR4edw',
'UC4tS4Q_Cno5JVcIUXxQOOpA',
'UCYLNGLIzMhRTi6ZOLjAPSmw',
'UCJrOtniJ0-NWz37R30urifQ',
'UCRv76wLBC73jiP7LX4C3l8Q',
'UCK5Q72Uyo73uRPk8PmM2A3w',
'UCw7xjxzbMwgBSmbeYwqYRMg',
'UCYvmuw-JtVrTZQ-7Y4kd63Q',
'UCsSsgPaZ2GSmO6il8Cb5iGA',
'UCX8pnu3DYUnx8qy8V_c6oHg',
'UCqq5n-Oe-r1EEHI3yvhVJcA',
'UCSiDGb0MnHFGjs4E2WKvShw',
'UCdX5KXiCTPYWYZscfphgQ4g',
'UCj22tfcQrWG7EMEKS0qLeEg',
'UC3KQ5GWANYF8lChqjZpXsQw',
'UC4rlAVgAK0SGk-yTfe48Qpw',
'UC5c9VlYTSvBSCaoMu_GI6gQ',
'UCECJDeK0MNapZbpaOzxrUPA',
'UCcgqSM4YEo5vVQpqwN-MaNw',
'UCzEAWIWMigRBbulQ6yVlilg',
'UCS94J1s6-qc8v7btCdS2pNg',
'UCLsooMJoIpl_7ux2jvdPB-Q',
'UCZJ7m7EnCNodqnu5SAtg8eQ',
'UCK9F8nycURBsR0YlrBsu1Ag',
'UCmL1WlDI8UkXDXCXcBQN9CA',
'UCwpcLKMwiuPg4aqImpGk6Ew',
'UCBR8-60-B28hp2BmDPdntcQ',
'UCz7PhJtc2G8Sre2vCLfmqAw',
'UC4hGmH5sABOA70D4fGb8qNQ',
'UC8f7MkX4MFOOJ2SerXLInCA',
'UCsT0YIqwnpJCM-mx7-gSA4Q',
'UC3ZkCd7XtUREnjjt3cyY_gg',
'UCq8DICunczvLuJJq414110A',
'UC2bYhAHyaqfWlPXWBVk4BcA',
'UCaHEdZtk6k7SVP-umnzifmQ',
'UCyI6QRxXArFsfWlMdvoG2hw',
'UCNRl8nOCoUvki2FNFxQZgEg',
'UCNUQK9mQoqi4yNXw2_Rj6SA',
'UCuSo4gcgxJRf4Bzu43wwVyg',
'UCM9r1xn6s30OnlJWb-jc3Sw',
'UCMsPm8-25ygqRrRe9_s1WFw',
'UCKAqou7V9FAWXpZd9xtOg3Q',
'UCSf0s2ogUVYpJPuzW1zpAOg',
'UCe3yZzUwpmy2eKKmF9svX0Q',
'UCx790OVgpTC1UVBQIqu3gnQ',
'UCoUM-UJ7rirJYP8CQ0EIaHA',
'UCpYye8D5fFMUPf9nSfgd4bA',
'UCXazgXDIYyWH-yXLAkcrFxw',
'UC56dNUTok1pgvpY75CsJQ4Q',
'UCunqjMN6EEbXjzU-RvwJrig',
'UCIvaYmXn910QMdemBG3v1pQ',
'UC9TO_oo4c_LrOiKNaY6aysA' ,
'UCN8S4CqMRy6tVKVXvs7Bzeg',
'UCAOtE1V7Ots4DjM8JLlrYgg',
'UCb2HGwORFBo94DmRx4oLzow',
'UCZuPJZ2kGFdlbQu1qotZaHw',
'UCbGPgvNunvclTypPtL3sa0w',
'UCWsDFcIhY2DBi3GB5uykGXA',
'UChGJGhZ9SOOHvBB0Y4DOO_w',
'UCcvNYxWXR_5TjVK7cSCdW-g',
'UCEKWXRsfUHkan-D_ljU8Asw',
'UC4DLvb5xZ9OLcVM1KC_R97g',
'UCJfNJmcv6LXCDsaa2kB_-7A',
'UCm-Qr3k89gtXcuv2jL29XFw',
'UCKL5hAuzgFQsyrsQKgU0Qng'//gma network
];

async function getChannelInfo(channelID) {
  try {
    const response = await axios.get(
      `https://mixerno.space/api/youtube-channel-counter/user/${channelID}`
    );
    const data = response.data;

    return {
      name: data.user.find(item => item.value === "name")?.count || "Unknown",
      subscribers: data.counts.find(item => item.value === "subscribers")?.count || 0,
      pfp: data.user.find(item => item.value === "pfp")?.count || "",
      goal: data.counts.find(item => item.value === "goal")?.count || null
    };
  } catch (error) {
    console.error(`❌ Error fetching ${channelID}: ${error.message}`);
    return { name: "Sharkbright", subscribers: 12345678, goal: 1, pfp: "" };
  }
}

async function updateJSON(lastUpdateTime, previousData) {
  let tracked = 0;
  let trackedchannels24hr = 0;
  let totalSubscribers = 0;

  let statsData = { tracked: 0, trackedchannels24hr: 0, totalSubscribers: 0 };
  try {
    statsData = JSON.parse(fs.readFileSync("stats.json"));
  } catch {}

  const channelInfos = await Promise.all(channelIDs.map(id => getChannelInfo(id)));
  const currentTime = Date.now();

  const results = channelInfos.map((channelInfo, i) => {
    const id = channelIDs[i];
    tracked++;

    const previousSubscribers = previousData[id]?.subscribers || 0;
    const subsGained24hrs = channelInfo.subscribers - previousSubscribers;

    if (subsGained24hrs !== 0) trackedchannels24hr++;
    totalSubscribers += channelInfo.subscribers;

    const subsout = subsGained24hrs * 100;

    return {
      channel_id: id,
      name: channelInfo.name,
      subscribers: channelInfo.subscribers,
      goal: channelInfo.goal,
      pfp: channelInfo.pfp,
      verified: true,
      subs_gained_24hrs: subsout,
      last_update: new Date(currentTime).toISOString()
    };
  });

  results.sort((a, b) => b.subscribers - a.subscribers);
  results.forEach((item, index) => { item.rank = index + 1; });

  fs.writeFileSync("top50.json", JSON.stringify(results.slice(0, 167), null, 2));

  statsData.tracked = tracked;
  statsData.trackedchannels24hr += trackedchannels24hr + 79876;
  statsData.totalSubscribers = totalSubscribers;
  fs.writeFileSync("stats.json", JSON.stringify(statsData, null, 2));

  console.log(`✅ Updated: Tracked ${tracked}, Active 24h: ${trackedchannels24hr}, Total Subs: ${totalSubscribers.toLocaleString()}`);

  const newPreviousData = {};
  results.forEach(item => {
    newPreviousData[item.channel_id] = { subscribers: item.subscribers };
  });

  return { currentTime, previousData: newPreviousData, results, statsData };
}

// Cache in memory so we can serve instantly
let cache = { results: [], statsData: {} };

async function run() {
  let lastUpdateTime = Date.now();
  let previousData = {};

  setInterval(async () => {
    const result = await updateJSON(lastUpdateTime, previousData);
    lastUpdateTime = result.currentTime;
    previousData = result.previousData;

    // store in cache
    cache.results = result.results;
    cache.statsData = result.statsData;
  }, 20000); // every 20s
}

// Start background updater
run();

// 👉 API endpoint
app.get("/cool", (req, res) => {
  res.json(cache.results);
});

app.get("/stats", (req, res) => {
  res.json(cache.statsData);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
