import React from 'react'
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  const filteredList = useSelector(state => state.countries.filteredCountries);
  const countriesList = useSelector(state => state.countries.countries);
  const state = useSelector(state => state.countries.status);
  const error = useSelector(state => state.countries.error);

  if (state === 'loading') {
    return <div className="m-5"><Spinner animation= 'border' className="m-5 p-3"/></div>

  } else if (state === 'failed') {
    return <div>{error}</div>

  }else{
    
    return (
    <div className='container-fluid mx-1'>
      <div className="row row-gap-5 column-gap-5 media-styles mx-3">
      {(filteredList.length ? filteredList : countriesList).map((country) => (
        <div className="col-sm d-grid p-0" key={country.name.common}>
          <Card as={Link} to={`DetailsPage/${country.name.common}`} className='card-style shadow p-3 mb-5 bg-body-tertiary rounded border border-0'>
          <Card.Img variant="top" src={country.flags.png} alt={country.flags.alt} className='img-fluid home-flag' />
          <Card.Body className='fw-lighter'>
            <Card.Title className='card-name'>{country.name.common}</Card.Title>
              <ul>
                <li><span>Population:</span> {country.population}</li>
                <li><span>Region:</span> {country.region}</li>
                <li><span>Captial:</span> {country.capital}</li>
              </ul>
          </Card.Body>
        </Card>
        </div>
      ))}
      </div>
    </div>
  )
}
}