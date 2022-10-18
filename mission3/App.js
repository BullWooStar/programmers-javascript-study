import GigInput from './GigInput.js';
import GigList from './Giglist.js';
import Loading from './Loading.js';
import SearchHistory from './SearchHistory.js';

export default function App({ $target, initialState }) {
  this.state = initialState;
  this.searchHistoryList = window.localStorage.getItem('searchHistoryList')
    ? JSON.parse(window.localStorage.getItem('searchHistoryList'))
    : [];

  this.setState = (nextState) => {
    this.state = nextState;
    gigList.setState(this.state);
  };

  this.setSearchHistoryList = (historyValue) => {
    this.searchHistoryList = this.searchHistoryList.filter(
      (e) => e !== historyValue
    );
    this.searchHistoryList.push(historyValue);
    if (this.searchHistoryList.length > 5) {
      this.searchHistoryList.splice(0, 1);
    }
    window.localStorage.setItem(
      'searchHistoryList',
      JSON.stringify(this.searchHistoryList)
    );
    searchHistory.setState(this.searchHistoryList);
  };

  this.setLoadingState = (status) => {
    loading.setState(status);
  };

  this.searchGig = async (bandName) => {
    try {
      this.setLoadingState(true);
      const response = await fetch(
        `https://api.idiots.band/api/search?keyword=${bandName}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      if (data.length === 0) {
        alert('검색결과가 없습니다!');
        this.setLoadingState(false);
        return;
      }
      this.setLoadingState(false);
      this.setState(data);
    } catch (error) {
      console.error(`${error}`);
    }
  };

  const searchHistory = new SearchHistory({
    $target,
    searchHistoryList: this.searchHistoryList,
    searchGig: this.searchGig,
  });

  const gigInput = new GigInput({
    $target,
    searchGig: this.searchGig,
    setSearchHistoryList: this.setSearchHistoryList,
  });

  const loading = new Loading({ $target });

  const gigList = new GigList({
    $target,
    initialState: this.state,
    searchGig: this.searchGig,
  });
}
