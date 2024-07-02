import { Table, Column, Model, DataType, BelongsTo, ForeignKey } from "sequelize-typescript";
import Post from "./Post";
import User from "./User";

@Table({
    timestamps: true
})
class Comment extends Model {
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
    content: string

    @ForeignKey(() => Post)
    @Column({
        type: DataType.INTEGER.UNSIGNED,
        allowNull: false,
    })
    postId: number
    
    @BelongsTo(() => Post)
    post: Post

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER.UNSIGNED,
        allowNull: false,
    })
    authorId: number

    @BelongsTo(() => User)
    author: User
}

export default Comment