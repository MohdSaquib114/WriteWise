import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";


export const prismaClient = new PrismaClient()

export async function createUser(email:string){
    try {
        
        await prismaClient.user.create({
            data: {
                email: email,
                provider: "Google"
            } 
        })
        return true
    } catch (error) {
        return error
    }
}

export async function getUserById(id:string){
    try {
        const user = await prismaClient.user.findFirst({
            where:{
                id:id
            }
        })
        return user
    } catch (error) {
        return error
    }
}