import {PrimaryGeneratedColumn, Column, Table} from "../../../src/index";

@Table("sample13_post_user")
export class PostUser {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("int")
    name: string;

    @Column()
    firstName: string;

    @Column()
    secondName: string;

}