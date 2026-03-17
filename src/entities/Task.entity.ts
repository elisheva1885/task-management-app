
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, RelationId, UpdateDateColumn } from "typeorm";
import { User } from "./User.entity.js";

@Entity({ name: 'task' })
export class Task {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ nullable: false })
    title!: string;

    @Column({ nullable: false })
    description!: string;

    @Column({ nullable: false })
    priority!: string;

    @Column({type:"timestamp" ,nullable: false })
    deadline! : Date;


    @ManyToOne(() => User, user => user.tasks)
    @JoinColumn({name: "userId"})
    user!: User;

    
    @RelationId((task: Task)=> task.user)
    userId!: string;
}
