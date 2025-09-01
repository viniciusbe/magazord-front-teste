import User from "@/components/User/User";
import { createFileRoute, useParams } from "@tanstack/react-router";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { BookMarked, Star } from "lucide-react";
import CustomTabsTrigger from "@/components/Tabs/CustomTabsTrigger";
import RepositoriesContent from "@/components/RepositoriesContent";
import StarredContent from "@/components/StarredContent";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const Route = createFileRoute("/$username")({
  component: App,
});

function App() {
  return (
    <div className="min-h-[calc(100vh-72px)] max-w-6xl flex justify-center m-auto py-10 px-4 gap-16">
      <User />

      <main className="flex-1">
        <Tabs defaultValue="repositories" className="gap-12">
          <TabsList>
            <CustomTabsTrigger
              value="repositories"
              text="Repositories"
              count={0}
            >
              <BookMarked className="size-6" />
            </CustomTabsTrigger>

            <CustomTabsTrigger value="starred" text="Starred" count={12}>
              <Star className="size-6" />
            </CustomTabsTrigger>
          </TabsList>

          <TabsContent value="repositories">
            <RepositoriesContent />
          </TabsContent>

          <TabsContent value="starred">
            <StarredContent />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
