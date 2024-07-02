import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";
import User from "./User";
import Category from "./Category";
import Comment from "./Comment";

@Table({
    timestamps: true
})
class Post extends Model {
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
    title: string

    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    content: string

    @ForeignKey(() => Category)
    @Column({
        type: DataType.INTEGER.UNSIGNED,
        allowNull: false,
    })
    categoryId: number

    @BelongsTo(() => Category)
    category: Category

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER.UNSIGNED,
        allowNull: false
    })
    authorId: number

    @BelongsTo(() => User)
    author: User

    @HasMany(() => Comment)
    comments: Comment[]
}

export default Post