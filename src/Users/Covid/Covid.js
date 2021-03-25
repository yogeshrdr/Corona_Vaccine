import React from "react";
import Cards from './Components/Cards/Cards'
import CountryPicker from './Components/CountryPicker/CountryPicker'
import { fetchData } from "./api";
import Select from "./CovidNews/News";


class Covid extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };


  render() {
    const { data, country } = this.state;
    return (
      <>
      <div className="flex justify-center items-center flex-col bg-blue-900">
        <h1 className="text-3xl xl:text-5xl font-bold text-white mb-10 mt-5 ">COVMS - COVID UPDATES</h1>
        <CountryPicker className="flex justify-center " handleCountryChange={this.handleCountryChange} />
        <Cards data={data} country={country} />
      </div>

      <div className="flex justify-center items-center flex-col bg-gray-100">
      <h1 className="text-3xl xl:text-5xl font-bold text-black mb-5 mt-5 ">COVMS - News Headlines</h1>
      <Select />
      </div>
      </>
    );
  }
}

export default Covid;

