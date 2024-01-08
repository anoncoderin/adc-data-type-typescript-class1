import Image from 'next/image'
import { Inter } from 'next/font/google'
import Person from '@/components/Person'


export default function Home() {
  //string
  var color:string = 'green';

  var color2:Color = 'red';

  //number
  var age:number = 65;

  //arrays
  var coords:Coordinates = [50.5, 70.5];

  //objects
  var prices:Price = {beforeTax: 120.99, afterTax: 135.99};

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
      <h1>Data Types</h1>
      <h2 className={'font-bold'}>Color:</h2>
      <div>{color}</div>

      <h2 className={'font-bold'}>Color2:</h2>
      <div>{color2}</div>

      <h2 className={'font-bold'}>Age:</h2>
      <div>{age}</div>

      <h2 className={'font-bold'}>Coordinates(array):</h2>
      <div>{coords[0]}</div>
      <div>{coords[1]}</div>

      <h2 className={'font-bold'}>Price(Object):</h2>
      <div>{prices.beforeTax}</div>
      <div>{prices.afterTax}</div>

      <div className={`flex flex-row`}>
        <Person firstName='John'/>
        <Person firstName='Bob' lastName='Doe'/>
      </div>
    </main>
  )
}
