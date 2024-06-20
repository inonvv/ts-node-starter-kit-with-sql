import { connect } from 'mssql';
import { Employee } from '../types/employee.type';

export default class Db {

    static connectionString = "workstation id=nodejsSQL.mssql.somee.com;packet size=4096;user id=shaykos_SQLLogin_1;pwd=9hida4w53i;data source=nodejsSQL.mssql.somee.com;persist security info=False;initial catalog=nodejsSQL;TrustServerCertificate=True";

    static async selectData(query: string): Promise<Employee[] | undefined> {
        try {
            const pool = await connect(Db.connectionString);
            const result = await pool.request().query(query);
            let data = result.recordset;
            let employees: Employee[] = [];
            for (let index = 0; index < data.length; index++) {
                const element = data[index];
                employees.push({
                    id: element.id,
                    first_name: element.first_name,
                    last_name: element.last_name,
                    birthday: new Date(element.birthday)
                });
            }
            return employees;
        } catch (err) {
            console.log(err);
        }
    }

    static async insertData_NotSecure(table: string, params: {}): Promise<any> {
        try {
            let query = ``;
            switch (table) {
                case 'Employee':
                    query = 'exec InsertEmployee ';
                    break;
                default:
                    break;
            }

            for (const [key, value] of Object.entries(params)) {
                query += `@${key}='${value}',`;
            }
            query = query.slice(0, -1);

            console.log('query', query);
            // const pool = await connect(Db.connectionString);
            // return await pool.request().query(query);
        } catch (err) {
            console.log(err);
        }
    }

    static async insertEmployee(procName: string, emp: Employee): Promise<any> {
        try {
            const pool = await connect(Db.connectionString);

            return await pool.request()
                .input('id', emp.id)
                .input('first_name', emp.first_name)
                .input('last_name', emp.last_name)
                .input('birthday', emp.birthday)
                .execute(procName);
        } catch (err) {
            console.log(err);
        }
    }

    static async deleteEmployees(procName: string): Promise<any> {
        try {
            const pool = await connect(Db.connectionString);

            return await pool.request()
                .execute(procName);
        } catch (err) {
            console.log(err);
        }
    }

}