import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedType, setSelectedType] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const lashTypes = [
    { id: "all", label: "Все эффекты", icon: "Sparkles" },
    { id: "classic", label: "Классика", icon: "Eye" },
    { id: "2d", label: "2D", icon: "Layers" },
    { id: "3d", label: "3D", icon: "Layers3" },
    { id: "volume", label: "Объём", icon: "Volume2" },
  ];

  const lashEffects = [
    {
      id: 1,
      title: "Натуральный эффект",
      type: "classic",
      description: "Мягкий и естественный взгляд для повседневной носки",
      duration: "2-3 недели",
    },
    {
      id: 2,
      title: "Кошачий взгляд",
      type: "2d",
      description: "Удлинение к внешнему углу глаза, создает томный взгляд",
      duration: "3-4 недели",
    },
    {
      id: 3,
      title: "Кукольный эффект",
      type: "3d",
      description: "Максимальная длина в центре века, открывает взгляд",
      duration: "2-3 недели",
    },
    {
      id: 4,
      title: "Лисий взгляд",
      type: "volume",
      description:
        "Плавное удлинение к внешнему углу, визуально вытягивает глаз",
      duration: "3-4 недели",
    },
    {
      id: 5,
      title: "Беличий эффект",
      type: "2d",
      description: "Резкий скачок длины во внешнем углу, игривый взгляд",
      duration: "2-3 недели",
    },
    {
      id: 6,
      title: "Голливудский объём",
      type: "volume",
      description: "Максимальная густота и объём для торжественных случаев",
      duration: "3-4 недели",
    },
  ];

  const filteredEffects = lashEffects.filter((effect) => {
    const matchesType = selectedType === "all" || effect.type === selectedType;
    const matchesSearch =
      effect.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      effect.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-golden-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-golden-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Sparkles" size={32} className="text-golden-DEFAULT" />
              <h1
                className="text-2xl font-bold"
                style={{ fontFamily: "Cormorant, serif" }}
              >
                Lash Effects
              </h1>
            </div>
            <Button
              variant="outline"
              className="border-golden-DEFAULT text-golden-DEFAULT hover:bg-golden-50"
            >
              <Icon name="User" size={16} className="mr-2" />
              Профиль
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2
            className="text-5xl font-bold mb-6 text-charcoal-900"
            style={{ fontFamily: "Cormorant, serif" }}
          >
            Найдите идеальный эффект
          </h2>
          <p
            className="text-xl text-charcoal-800 mb-8 max-w-2xl mx-auto"
            style={{ fontFamily: "Source Sans Pro, sans-serif" }}
          >
            Профессиональный каталог эффектов наращивания ресниц для мастеров
            лашмейкеров
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Icon
                name="Search"
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-golden-DEFAULT"
              />
              <Input
                type="text"
                placeholder="Поиск эффектов..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/90 border-golden-100 focus:border-golden-DEFAULT"
              />
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {lashTypes.map((type) => (
              <Button
                key={type.id}
                variant={selectedType === type.id ? "default" : "outline"}
                onClick={() => setSelectedType(type.id)}
                className={`${
                  selectedType === type.id
                    ? "bg-golden-DEFAULT text-charcoal-900 hover:bg-golden-100"
                    : "border-golden-DEFAULT text-golden-DEFAULT hover:bg-golden-50"
                }`}
              >
                <Icon name={type.icon as any} size={16} className="mr-2" />
                {type.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Effects Grid */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEffects.map((effect) => (
              <Card
                key={effect.id}
                className="group hover:shadow-lg transition-all duration-300 bg-white/90 backdrop-blur-sm border-golden-100 hover:border-golden-DEFAULT hover:scale-105"
              >
                <CardHeader className="pb-3">
                  <div className="aspect-video bg-gradient-to-br from-golden-50 to-cream-50 rounded-lg mb-4 flex items-center justify-center">
                    <img
                      src="/img/fa9846d6-157c-4343-b0cb-8b8626bb0a7e.jpg"
                      alt={effect.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <CardTitle
                      className="text-lg"
                      style={{ fontFamily: "Cormorant, serif" }}
                    >
                      {effect.title}
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className="bg-golden-50 text-golden-DEFAULT border-golden-100"
                    >
                      {lashTypes.find((t) => t.id === effect.type)?.label}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription
                    className="text-sm mb-4"
                    style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                  >
                    {effect.description}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-charcoal-800">
                      <Icon name="Clock" size={14} className="mr-1" />
                      {effect.duration}
                    </div>
                    <Button
                      size="sm"
                      className="bg-golden-DEFAULT text-charcoal-900 hover:bg-golden-100"
                    >
                      <Icon name="Eye" size={14} className="mr-1" />
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal-900 text-cream-50 py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icon
                  name="Sparkles"
                  size={24}
                  className="text-golden-DEFAULT"
                />
                <h3
                  className="text-xl font-bold"
                  style={{ fontFamily: "Cormorant, serif" }}
                >
                  Lash Effects
                </h3>
              </div>
              <p
                className="text-cream-50/80"
                style={{ fontFamily: "Source Sans Pro, sans-serif" }}
              >
                Профессиональная платформа для мастеров лашмейкеров
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-cream-50/80">
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (999) 123-45-67
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@lasheffects.ru
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 hover:bg-golden-DEFAULT/20"
                >
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 hover:bg-golden-DEFAULT/20"
                >
                  <Icon name="MessageCircle" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-golden-100/20 mt-8 pt-8 text-center text-cream-50/60">
            <p>© 2024 Lash Effects. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
