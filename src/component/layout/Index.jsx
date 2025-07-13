import Tracks from "../tracks/Tracks";
import Search from "../tracks/SearchBar";
import AdBanner from "../ads/AdBanner";
import { getAdSlot, shouldShowAds } from "../../config/adsense";
import axios from "axios";
import { connect } from "react-redux";
import { useEffect } from "react";
function Index({ dispatch }) {
  
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/chart");
      const data = response.data;

      dispatch({
        type: "FETCH",
        payload: data.message.body.track_list,
      });
    } catch (error) {
      console.log("API Error:", error);
      // If API fails, the mock data from initial state will be used
      // No need to dispatch anything as the initial state already has mock tracks
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Search />
      {shouldShowAds('HOME') && (
        <AdBanner adSlot={getAdSlot('BANNER_TOP')} />
      )}
      <Tracks />
      {shouldShowAds('HOME') && (
        <AdBanner adSlot={getAdSlot('BANNER_BOTTOM')} />
      )}
    </div>
  );
}

export default connect()(Index);
