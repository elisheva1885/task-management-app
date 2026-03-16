import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Task } from "./Task.entity.js";

@Entity({ name: 'user' })
export class User {
    @PrimaryGeneratedColumn("uuid")
    id!: string;
    @Column({ nullable: false })
    username!: string;
    @Column({ nullable: false })
    password!: string;
    @CreateDateColumn()
    createdAt!: Date;
    @UpdateDateColumn()
    updatedAt!: Date;

    @OneToMany(()=> Task, (task)=> task.user,{cascade:true})
    tasks!:Task[];
}
