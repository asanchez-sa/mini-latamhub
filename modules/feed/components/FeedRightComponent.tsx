import Image from "next/image";
import { Upload } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default async function FeedRightComponent() {
  return (
    <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
      <Card x-chunk="dashboard-07-chunk-3">
        <CardHeader>
          <CardTitle>Product Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid gap-3">
              <Label htmlFor="status">Status</Label>
              <Select>
                <SelectTrigger id="status" aria-label="Select status">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Active</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
        <CardHeader>
          <CardTitle>Product Images</CardTitle>
          <CardDescription>
            Lipsum dolor sit amet, consectetur adipiscing elit
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2">
            <Image
              alt="Product image"
              className="aspect-square w-full rounded-md object-cover"
              height="300"
              src="/placeholder.svg"
              width="300"
            />
            <div className="grid grid-cols-3 gap-2">
              <button>
                <Image
                  alt="Product image"
                  className="aspect-square w-full rounded-md object-cover"
                  height="84"
                  src="/placeholder.svg"
                  width="84"
                />
              </button>
              <button>
                <Image
                  alt="Product image"
                  className="aspect-square w-full rounded-md object-cover"
                  height="84"
                  src="/placeholder.svg"
                  width="84"
                />
              </button>
              <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                <Upload className="h-4 w-4 text-muted-foreground" />
                <span className="sr-only">Upload</span>
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-07-chunk-5">
        <CardHeader>
          <CardTitle>Archive Product</CardTitle>
          <CardDescription>
            Lipsum dolor sit amet, consectetur adipiscing elit.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div></div>
          <Button size="sm" variant="secondary">
            Archive Product
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
