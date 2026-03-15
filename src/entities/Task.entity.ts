import { Column, CreateDateColumn, Entity, ForeignKey, ObjectId, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'user' })
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ nullable: false })
    title: string;

    @Column({ nullable: false })
    description: string;

    @Column({ nullable: false })
    status: string;

    @ForeignKey(ObjectId(User))
    userId: string;
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
