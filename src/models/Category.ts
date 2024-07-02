import { Table, Column, Model, DataType, HasMany } from "sequelize-typescript";
import Post from "./Post";

@Table
class Category extends Model {
    @Column({
        type: DataType.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    })
    id:number

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    description: string

    @HasMany(() => Post)
    posts: Post[]
}

export default Category