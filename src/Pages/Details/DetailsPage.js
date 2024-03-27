import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Details.css';
import Spinner from 'react-bootstrap/Spinner';

export default function DetailsPage() {
  const {countryName} = useParams();
  const countriesList = useSelector((state) => state.countries.countries);
  const country = countriesList.find((country) => country.name.common === countryName);

  if (!country) {

    return <div><Spinner animation= 'border' className="m-5 p-5"/>Loading...</div>;

  } else {

    const nativeName = country.name.nativeName ? country.name.nativeName[Object.keys(country.name.nativeName)[0]].common : country.name.common;
    const currencies = Object.values(country.currencies).map(currency => currency.name).join(', ');
    const languages = Object.values(country.languages).join(', ');

    const getCountryName = (cca3) => {
      const country = countriesList.find((country) => country.cca3 === cca3);
      return country ? country.name.common : '';
    }

    const borders = country.borders ? country.borders.map((cca3, index) => {
      let borderCountryName = getCountryName(cca3);
      return (
        <li key={index} className='py-2 border-countries-list'>
          <Link to={`/DetailsPage/${borderCountryName}`} className='px-3 py-2 border-countries rounded'>{borderCountryName}</Link>
        </li>
      )
    }) 
    : 'None';

    return (
      <div className='details-component'>
        <div className="row my-5 back-div">
          <Link to='/' className='py-1 px-4 width border-countries rounded'><i className="fa-solid fa-arrow-left pe-2"></i>Back</Link>
        </div>
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center">
            <img src={country.flags.png} alt={country.name.common} className='img-fluid' />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center info-component">
            <div className="row">
              <h1>{country.name.common}</h1>
            </div>
            <div className="row pt-3">
              <div className="col-sm-6">
                <ul className='details fw-lighter'>
                  <li><span>Native Name: </span>{nativeName}</li>
                  <li><span>Population: </span>{country.population}</li>
                  <li><span>Region: </span>{country.region}</li>
                  <li><span>Sub Region: </span>{country.subregion}</li>
                  <li><span>Capital: </span>{country.capital[0]}</li>
                </ul>
              </div>
              <div className="col-sm-6 pe-3">
                <ul className='details fw-lighter'>
                  <li><span>Top Level Domain: </span>{country.tld[0]}</li>
                  <li><span>Currencies: </span>{currencies}</li>
                  <li><span>Languages: </span>{languages}</li>
                </ul>
              </div>
            </div>
            <div className="row d-flex pt-4 fw-lighter">
              <div className="col-sm-3 pe-0 pb-2">
                <span className='pe-4 fw-medium'>Border Countries: </span>
              </div>
              <div className="col-sm-8 px-0">
                <ul className='details d-flex flex-wrap gap-2'>
                  {borders}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}