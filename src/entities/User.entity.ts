import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Task } from "./Task.entity.js";

@Entity({ name: 'user' })
export class User {
    @PrimaryGeneratedColumn("uuid")
    id!: string;
    @Column({ nullable: false ,unique:true})
    username!: string;
    @Column({ nullable: false })
    password!: string;

    @OneToMany(()=> Task, (task)=> task.user,{cascade:true})
    tasks!:Task[];
}
