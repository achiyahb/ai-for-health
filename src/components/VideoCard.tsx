
import React from "react";
import { Shield, Search, Globe, MessageSquare, Brain, Palette, Bot } from "lucide-react";

type VideoCardProps = {
  embedId: string;
  title: string;
  description: string;
  icon: "shield" | "search" | "globe" | "message-square" | "brain" | "palette" | "bot";
};

const VideoCard = ({ embedId, title, description, icon }: VideoCardProps) => {
  const renderIcon = () => {
    switch (icon) {
      case "shield":
        return <Shield className="h-5 w-5" />;
      case "search":
        return <Search className="h-5 w-5" />;
      case "globe":
        return <Globe className="h-5 w-5" />;
      case "message-square":
        return <MessageSquare className="h-5 w-5" />;
      case "brain":
        return <Brain className="h-5 w-5" />;
      case "palette":
        return <Palette className="h-5 w-5" />;
      case "bot":
        return <Bot className="h-5 w-5" />;
      default:
        return <MessageSquare className="h-5 w-5" />;
    }
  };

  // Determine background color based on icon
  const getIconBackground = () => {
    switch (icon) {
      case "shield":
        return "bg-ai-lightBlue";
      case "search":
        return "bg-ai-lightPurple";
      case "globe":
        return "bg-blue-100";
      case "message-square":
        return "bg-green-100";
      case "brain":
        return "bg-ai-lightTeal";
      case "palette":
        return "bg-yellow-100";
      case "bot":
        return "bg-pink-100";
      default:
        return "bg-gray-100";
    }
  };

  // Determine icon color based on icon
  const getIconColor = () => {
    switch (icon) {
      case "shield":
        return "text-ai-blue";
      case "search":
        return "text-ai-purple";
      case "globe":
        return "text-blue-700";
      case "message-square":
        return "text-green-700";
      case "brain":
        return "text-ai-teal";
      case "palette":
        return "text-yellow-700";
      case "bot":
        return "text-pink-700";
      default:
        return "text-gray-700";
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden card-shadow">
      <div className="aspect-w-16 aspect-h-9 relative">
        <iframe
          className="w-full h-64 md:h-72"
          src={`https://www.youtube.com/embed/${embedId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
        ></iframe>
      </div>
      <div className="p-5">
        <div className="flex items-center mb-3">
          <div className={`${getIconBackground()} p-2 rounded-full mr-3`}>
            <div className={getIconColor()}>
              {renderIcon()}
            </div>
          </div>
          <h3 className="font-bold text-lg">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
