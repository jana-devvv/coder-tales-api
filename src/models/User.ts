import { Table, Column, Model, DataType, HasMany, BeforeCreate, BeforeUpdate } from "sequelize-typescript";
import bcrypt from 'bcrypt'
import Post from "./Post";
import Comment from "./Comment";

@Table({
    timestamps: true
})
class User extends Model {
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
        unique: true
    })
    username: string

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    email: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    password: string

    @HasMany(() => Post)
    posts: Post[]

    @HasMany(() => Comment)
    comments: Comment[]

    @BeforeUpdate
    @BeforeCreate
    static async hash(user: User){
        user.password = await bcrypt.hash(user.password, 10)
    }
}

export default User