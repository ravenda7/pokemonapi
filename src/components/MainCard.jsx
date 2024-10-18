import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

const MainCard = () => {

    return(
        <Card className='h-[28rem]' >
            <CardContent>
                <p>Card Content</p>
            </CardContent>
        </Card>

    );
};

export default MainCard;