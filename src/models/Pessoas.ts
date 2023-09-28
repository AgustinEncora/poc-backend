import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
    tableName: 'pessoas'
})
export class Pessoa extends Model{


    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'ID'
    })id!: number;

    @Column({
        type: DataType.STRING(100),
        field: 'first_name'
    })firstName!: string;

    @Column({
        type: DataType.STRING(100),
        field: 'last_name'
    })lastName!: string;

    @Column({
        type: DataType.INTEGER,
        field: 'age'
    })age!: number;

    @Column({
        type: DataType.STRING(100),
        field: 'email'
    })email!: string;

}