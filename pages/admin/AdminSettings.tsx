
import React from 'react';
import { useAppContext } from '../../context/AppContext';

const ColorInput: React.FC<{ label: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }> = ({ label, value, onChange }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <div className="mt-1 flex items-center space-x-2">
            <input type="color" value={value} onChange={onChange} className="h-10 w-10 p-1 border border-gray-300 rounded-md cursor-pointer"/>
            <input type="text" value={value} onChange={onChange} className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"/>
        </div>
    </div>
);

const AdminSettings: React.FC = () => {
    const { theme, setTheme } = useAppContext();
    
    const handleColorChange = (colorType: 'primary' | 'secondary', shade: 'light' | 'default' | 'dark') => (e: React.ChangeEvent<HTMLInputElement>) => {
        setTheme(prevTheme => ({
            ...prevTheme,
            colors: {
                ...prevTheme.colors,
                [colorType]: {
                    ...prevTheme.colors[colorType],
                    [shade]: e.target.value,
                }
            }
        }));
    };

    const handleSave = () => {
        // In a real app, this would save to a database. Here we just show an alert.
        alert('Theme settings saved! (Session only)');
    }
    
    const handleReset = () => {
        setTheme({
            colors: {
                primary: { light: '#60a5fa', default: '#3b82f6', dark: '#2563eb' },
                secondary: { light: '#f4f4f5', default: '#e4e4e7', dark: '#a1a1aa' },
            },
            font: 'Inter'
        });
        alert('Theme reset to default! (Session only)');
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Settings</h1>
            
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Appearance Customization</h2>
                
                <div className="space-y-6 mt-4">
                    {/* Primary Colors */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-700">Primary Color</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                            <ColorInput label="Light" value={theme.colors.primary.light} onChange={handleColorChange('primary', 'light')} />
                            <ColorInput label="Default" value={theme.colors.primary.default} onChange={handleColorChange('primary', 'default')} />
                            <ColorInput label="Dark" value={theme.colors.primary.dark} onChange={handleColorChange('primary', 'dark')} />
                        </div>
                    </div>
                    
                    {/* Secondary Colors */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-700">Secondary Color</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                            <ColorInput label="Light" value={theme.colors.secondary.light} onChange={handleColorChange('secondary', 'light')} />
                            <ColorInput label="Default" value={theme.colors.secondary.default} onChange={handleColorChange('secondary', 'default')} />
                             <ColorInput label="Dark" value={theme.colors.secondary.dark} onChange={handleColorChange('secondary', 'dark')} />
                        </div>
                    </div>

                    {/* Fonts - Simplified */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-700">Typography</h3>
                         <p className="text-sm text-gray-500">Font customization is not available in this demo.</p>
                        <select disabled className="mt-2 w-full md:w-1/3 rounded-md border-gray-300 shadow-sm bg-gray-100 cursor-not-allowed">
                            <option>Inter</option>
                        </select>
                    </div>

                    <div className="pt-6 border-t flex justify-end space-x-3">
                        <button onClick={handleReset} className="bg-gray-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-600 transition-colors">
                           Reset to Default
                        </button>
                        <button onClick={handleSave} className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminSettings;
