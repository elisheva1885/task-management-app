
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User.entity.js";
import { Priority } from "../constants/priority.js";

@Entity({ name: 'task' })
export class Task {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ nullable: false, type: 'varchar' })
    title!: string;

    @Column({ nullable: false, type: 'varchar' })
    description!: string;

    @Column({
        type: "enum", enum: Priority, nullable: false, default: Priority.Medium})
    priority!: Priority;

    @Column({ type: "timestamp", nullable: false })
    deadline!: Date;

    @Column({ type: 'varchar' })
    userId!: string;

    @ManyToOne(() => User, user => user.tasks)
    @JoinColumn({ name: "userId" })
    user!: User;
}
