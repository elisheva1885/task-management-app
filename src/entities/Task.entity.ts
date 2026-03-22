
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User.entity.js";

@Entity({ name: 'task' })
export class Task {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({type: "varchar", nullable: false })
    title!: string;

    @Column({type: "varchar", nullable: false })
    description!: string;

    @Column({type: "varchar", nullable: false })
    priority!: string;

    @Column({ type: "timestamp", nullable: false })
    deadline!: Date;

    @Column({type: "varchar"})
    userId!: string;

    @ManyToOne(() => User, user => user.tasks)
    @JoinColumn({ name: "userId" })
    user!: User;



}
