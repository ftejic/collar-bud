import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

function page() {
  return (
    <section className="container mx-auto mt-[68px] md:mt-[124px] lg:mt-[152px] py-10 md:py-16 space-y-10">
      <h2 className="font-unbounded font-bold text-2xl mb-5">Size Charts</h2>
      <Table>
        <TableCaption>Dog Collars</TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead>Size</TableHead>
                <TableHead>Neck Circumference (cm)</TableHead>
                <TableHead>Dog Weight (kg)</TableHead>
                <TableHead>Example Breeds</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
                <TableCell>XS</TableCell>
                <TableCell>20 - 30</TableCell>
                <TableCell>Up to 5 kg</TableCell>
                <TableCell>Chihuahua, Yorkshire Terrier</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>S</TableCell>
                <TableCell>30 - 40</TableCell>
                <TableCell>5 - 10 kg</TableCell>
                <TableCell>Maltese, Dachshund</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>M</TableCell>
                <TableCell>40 - 50</TableCell>
                <TableCell>10 - 20 kg</TableCell>
                <TableCell>Beagle, Cocker Spaniel</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>L</TableCell>
                <TableCell>50 - 60</TableCell>
                <TableCell>20 - 30 kg</TableCell>
                <TableCell>Labrador, Boxer</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>XL</TableCell>
                <TableCell>60+</TableCell>
                <TableCell>Over 30 kg</TableCell>
                <TableCell>Rottweiler, Mastiff</TableCell>
            </TableRow>
        </TableBody>
      </Table>
      <Table className="mt-20">
        <TableCaption>Cat Collars</TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead>Size</TableHead>
                <TableHead>Neck Circumference (cm)</TableHead>
                <TableHead>Example Breeds</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
                <TableCell>S</TableCell>
                <TableCell>18 - 23</TableCell>
                <TableCell>Smaller Cat Breeds</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>M</TableCell>
                <TableCell>23 - 28</TableCell>
                <TableCell>Average Domestic Cats</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>L</TableCell>
                <TableCell>28 - 33</TableCell>
                <TableCell>Larger and Heavier Cats</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </section>
  );
}

export default page;
