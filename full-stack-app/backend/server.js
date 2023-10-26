import express from 'express'
const app = express();
import cors from 'cors';
import dotenv from 'dotenv';
// Load environment variables from .env file
dotenv.config();

app.use(cors());
app.use(express.json());



app.use(express.static('dist'))

app.get('/nasir', (req, res) => {
    res.send('Nasir is a mearn developer ');
});

app.get('/api/employeeList', (req, res) => {
    let employesList = [

        { id: 1, name: "Name 1", title: "Title 1" },
        { id: 2, name: "Name 2", title: "Title 2" },
        { id: 3, name: "Name 3", title: "Title 3" },
        { id: 4, name: "Name 4", title: "Title 4" },
        { id: 5, name: "Name 5", title: "Title 5" },
        { id: 6, name: "Name 6", title: "Title 6" },
        { id: 7, name: "Name 7", title: "Title 7" },
        { id: 8, name: "Name 8", title: "Title 8" },
        { id: 9, name: "Name 9", title: "Title 9" },
        { id: 10, name: "Name 10", title: "Title 10" },
        { id: 11, name: "Name 11", title: "Title 11" },
        { id: 12, name: "Name 12", title: "Title 12" },
        { id: 13, name: "Name 13", title: "Title 13" },
        { id: 14, name: "Name 14", title: "Title 14" },
        { id: 15, name: "Name 15", title: "Title 15" },
        { id: 16, name: "Name 16", title: "Title 16" },
        { id: 17, name: "Name 17", title: "Title 17" },
        { id: 18, name: "Name 18", title: "Title 18" },
        { id: 19, name: "Name 19", title: "Title 19" },
        { id: 20, name: "Name 20", title: "Title 20" },
        { id: 21, name: "Name 21", title: "Title 21" },
        { id: 22, name: "Name 22", title: "Title 22" },
        { id: 23, name: "Name 23", title: "Title 23" },
        { id: 24, name: "Name 24", title: "Title 24" },
        { id: 25, name: "Name 25", title: "Title 25" },
        { id: 26, name: "Name 26", title: "Title 26" },
        { id: 27, name: "Name 27", title: "Title 27" },
        { id: 28, name: "Name 28", title: "Title 28" },
        { id: 29, name: "Name 29", title: "Title 29" },
        { id: 30, name: "Name 30", title: "Title 30" },
        { id: 31, name: "Name 31", title: "Title 31" },
        { id: 32, name: "Name 32", title: "Title 32" },
        { id: 33, name: "Name 33", title: "Title 33" },
        { id: 34, name: "Name 34", title: "Title 34" },
        { id: 35, name: "Name 35", title: "Title 35" },
        { id: 36, name: "Name 36", title: "Title 36" },
        { id: 37, name: "Name 37", title: "Title 37" },
        { id: 38, name: "Name 38", title: "Title 38" },
        { id: 39, name: "Name 39", title: "Title 39" },
        { id: 40, name: "Name 40", title: "Title 40" },
        { id: 41, name: "Name 41", title: "Title 41" },
        { id: 42, name: "Name 42", title: "Title 42" },
        { id: 43, name: "Name 43", title: "Title 43" },
        { id: 44, name: "Name 44", title: "Title 44" },
        { id: 45, name: "Name 45", title: "Title 45" },
        { id: 46, name: "Name 46", title: "Title 46" },
        { id: 47, name: "Name 47", title: "Title 47" },
        { id: 48, name: "Name 48", title: "Title 48" },
        { id: 49, name: "Name 49", title: "Title 49" },
        { id: 50, name: "Name 50", title: "Title 50" }
    ]
    res.send(employesList);

})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
});