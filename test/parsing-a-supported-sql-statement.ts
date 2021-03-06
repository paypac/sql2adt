import {expect} from 'chai';
import {parseSQL} from 'sql2adt';




describe('Parsing a supported SQL statement', () => {

    let tests = [
        `SELECT table.colname AS alias FROM table`,
        `SELECT ROWINDEX AS alias FROM table`,
        `SELECT table.c1 AS c1, table.c2 AS c2 FROM table`,
        `SELECT tbl.colname AS alias FROM table as tbl`,
        `SELECT table.c1 AS c1, ROWINDEX AS rix, table.c2 AS c2 FROM table`,
        `SELECT table.colname AS alias FROM table WHERE table.date > '2016-12-01'`,
        `SELECT t1.c1 AS c1 FROM table1 as t1 INNER JOIN table2 as t2 ON t1.id = t2.id`,
        `SELECT t1.c1 AS c1 FROM table1 as t1 INNER JOIN table2 as t2 ON t1.id = t2.id WHERE t1.x = 'some value'`,
        `SELECT t1.c1 AS c1 FROM t1 WHERE t1.x >= 'aaa' AND t1.x <= 'zzz'`,
        `SELECT table.colname AS alias FROM table LIMIT 5`,
        `SELECT table.colname AS alias FROM table OFFSET 3`,
        `SELECT table.colname AS alias FROM table LIMIT 5234234 OFFSET 3000000`,
    ];

    tests.forEach(test => {
        it(test, () => {
            expect(() => parseSQL(test)).not.to.throw();
        });
    });
});
