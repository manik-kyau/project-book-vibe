/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis,Tooltip, CartesianGrid, Legend } from 'recharts';
import { getStoredData } from '../../Utility/localstorage';
import { useLoaderData } from 'react-router-dom';

const PageToRead = () => {
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink','#ADFF2F','#9ACD32','#7F00FF'];
    const books = useLoaderData();
    const [storedBook, setStoredBooks] = useState([]);

    useEffect(()=>{
      const getStoredBooks = getStoredData();
        if(books.length > 0){
            const storedBooks = books.filter(book => getStoredBooks.includes(book.id));
            setStoredBooks(storedBooks);
        }
    
    },[books]);

      const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };

      const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };

      // const CustomTooltip = ({ active, payload, label }) => {
      //   if (active && payload && payload.length) {
      //     return (
      //       <div className="custom-tooltip bg-white p-4 bg-opacity-70 rounded-lg">
      //         <p className="label">{`Name: ${label}`}</p>
      //         <p className='label'>{`Page: ${payload[0].value}`}</p>
      //       </div>
      //     );
      //   }
      //   return null;
      // };

    return (
        <div className='flex justify-center items-center my-12 bg-gray-100 py-12 lg:py-24 rounded-3xl'>
            <BarChart className=''
              width={1100}
              height={400}
              data={storedBook}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="bookName" />
              <YAxis />
              <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                {books.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
              </Bar>
              {/* <Tooltip content={<CustomTooltip/>} /> */}
              <Legend/>
            </BarChart>
        </div>
    );
};
PageToRead.propTypes={
  props: PropTypes.object,
}
export default PageToRead;