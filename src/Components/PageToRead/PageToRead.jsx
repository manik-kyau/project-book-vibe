/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const PageToRead = () => {
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink','#ADFF2F','#9ACD32','#7F00FF'];

    const [books, setBooks] = useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data =>{
            const bookData = data;
            const BooksWithData = bookData.map(book =>{
                const bookObj = {
                    name: book.bookName.slice(0,12),
                    pages : book.totalPages,
                } 
                return bookObj;
            })
            setBooks(BooksWithData);
            console.log(BooksWithData)
        })
    },[])

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

    return (
        <div className='flex justify-center items-center my-12 bg-gray-100 py-24 rounded-3xl'>
            <BarChart
              width={1000}
              height={400}
              data={books}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Bar dataKey="pages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                {books.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
              </Bar>
            </BarChart>
        </div>
    );
};

export default PageToRead;