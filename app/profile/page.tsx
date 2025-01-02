import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background p-4 md:pl-72">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <Button variant="destructive">Log out</Button>
        </div>

        {/* Profile Avatar */}
        <div className="flex justify-center mb-8">
          <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center">
            <div className="w-24 h-24 rounded-full border-4 border-background bg-[#00FF38]" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-4xl font-bold text-[#00FF38]">6</div>
              <div className="text-sm text-muted-foreground">Completed</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-4xl font-bold text-[#00FF38]">2</div>
              <div className="text-sm text-muted-foreground">Not Completed</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-4xl font-bold text-[#00FF38]">8</div>
              <div className="text-sm text-muted-foreground">Total Events</div>
            </CardContent>
          </Card>
        </div>

        {/* Details & Skills */}
        <Tabs defaultValue="details">
          <TabsList className="w-full mb-4">
            <TabsTrigger value="details" className="flex-1">Details</TabsTrigger>
            <TabsTrigger value="skills" className="flex-1">Skills</TabsTrigger>
          </TabsList>
          <TabsContent value="details">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground">Name</div>
                  <div className="font-medium">John Doe</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-medium">john@example.com</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Phone</div>
                  <div className="font-medium">+1 234 567 890</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Year & Semester</div>
                  <div className="font-medium">2024, Semester 1</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Roll No</div>
                  <div className="font-medium">CS2024001</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Branch & Section</div>
                  <div className="font-medium">Computer Science, A</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="skills">
            <Card>
              <CardContent className="p-6">
                <div className="text-muted-foreground">No skills added yet</div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

