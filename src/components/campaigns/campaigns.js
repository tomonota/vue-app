import CampaignSearch from "@/components/campaigns/campaign-search.vue";

export default {
  components: {
    "campaign-search": CampaignSearch,
  },
  props: {
    campaigns: Array,
  },
  data() {
    return {
      campaignStatusDisplay: {
        active: "有効",
        stop: "停止中",
      }
    }
  }
}