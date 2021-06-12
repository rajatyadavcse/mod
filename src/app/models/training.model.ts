import { Technology } from './technology.model';
import { Mentor } from './mentor.model';
import { User } from './user.model';
import { Payment } from './payment.model';
import { Skill } from './skill.model';

export class Training{
    id:number;
    status:string;
    progress:number;
    fees:number;
    commisionAmount:number;
    rating:number;
    startDate:string;
    endDate:string;
    amountRecieved:number;
    userId:number;
    mentorId:number;
    skillId:number;
    razorPaymentId:number;
    technology:Technology;
    user:User[];
    payment:Payment[];
    skill:Skill[];
    mentor:Mentor;    

    
}